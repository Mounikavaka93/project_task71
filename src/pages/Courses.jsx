import { useMemo, useState } from 'react'
import { Search, X } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import Container from '../components/Container'
import CourseCard from '../components/CourseCard'
import PageHeader from '../components/PageHeader'
import { useAuth } from '../context/AuthContext'
import { courses } from '../data/courses'
import { categories } from '../data/site'
import { usePageTitle } from '../hooks/usePageTitle'

const sorts = [
  { value: 'featured', label: 'Featured' },
  { value: 'rating', label: 'Highest rated' },
  { value: 'price-asc', label: 'Price: low to high' },
  { value: 'price-desc', label: 'Price: high to low' },
]

export default function Courses() {
  usePageTitle('Courses')
  const { user } = useAuth()
  const [params, setParams] = useSearchParams()
  const [sort, setSort] = useState('featured')

  const query = params.get('q') || ''
  const category = params.get('category') || 'All'

  const updateParams = (next) => {
    setParams(
      (current) => {
        const updated = new URLSearchParams(current)
        Object.entries(next).forEach(([key, value]) => {
          if (!value || value === 'All') updated.delete(key)
          else updated.set(key, value)
        })
        return updated
      },
      { replace: true },
    )
  }

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase()
    const filtered = courses.filter((course) => {
      const categoryMatch = category === 'All' || course.category === category
      const haystack = `${course.title} ${course.summary} ${course.instructor.name} ${course.category}`.toLowerCase()
      const queryMatch = !needle || haystack.includes(needle)
      return categoryMatch && queryMatch
    })

    const ranked = [...filtered]
    ranked.sort((a, b) => {
      if (sort === 'rating') return b.rating - a.rating || b.reviews - a.reviews
      if (sort === 'price-asc') return a.price - b.price
      if (sort === 'price-desc') return b.price - a.price
      return Number(b.featured) - Number(a.featured) || b.rating - a.rating
    })
    return ranked
  }, [category, query, sort])

  const filtersActive = Boolean(query) || category !== 'All'

  return (
    <div className="page">
      <PageHeader
        eyebrow="Catalog"
        title="Courses open this term."
        text="A selection from the current Liorwyn Hall catalog. Filter by discipline or search by title, teacher, or topic."
      />

      <section className="py-10 md:py-14">
        <Container>
          <div className="rounded-[1.6rem] border border-line bg-cream p-4 md:p-6">
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-mist" />
              <input
                id="course-search"
                value={query}
                onChange={(event) => updateParams({ q: event.target.value })}
                placeholder="Search courses or teachers"
                aria-label="Search courses"
                className="w-full rounded-2xl border border-line bg-white py-3 pl-12 pr-12 text-ink outline-none transition placeholder:text-mist focus:border-pine focus:ring-4 focus:ring-pine/15"
              />
              {query ? (
                <button
                  type="button"
                  className="absolute right-3 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-mist hover:bg-paper hover:text-ink"
                  aria-label="Clear search"
                  onClick={() => updateParams({ q: '' })}
                >
                  <X className="h-4 w-4" />
                </button>
              ) : null}
            </div>

            <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
              {['All', ...categories.map((item) => item.name)].map((name) => {
                const active = category === name
                return (
                  <button
                    key={name}
                    type="button"
                    aria-pressed={active}
                    onClick={() => updateParams({ category: name })}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      active
                        ? 'bg-ink text-cream'
                        : 'border border-line bg-paper text-ink-soft hover:border-ink hover:text-ink'
                    }`}
                  >
                    {name}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p aria-live="polite" className="text-sm text-ink-soft">
              Showing {visible.length} {visible.length === 1 ? 'course' : 'courses'}
              {category !== 'All' ? ` in ${category}` : ''}
              {query ? ` for “${query.trim()}”` : ''}
            </p>
            <div className="flex items-center gap-3">
              {filtersActive ? (
                <button
                  type="button"
                  className="text-sm font-semibold text-pine hover:text-pine-deep"
                  onClick={() => {
                    updateParams({ q: '', category: 'All' })
                    setSort('featured')
                  }}
                >
                  Clear filters
                </button>
              ) : null}
              <label htmlFor="sort" className="inline-flex items-center text-sm font-semibold text-ink-soft">
                Sort
                <select
                  id="sort"
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="ml-2 rounded-full border border-line bg-cream px-3 py-2 text-sm font-semibold text-ink"
                >
                  {sorts.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          {visible.length ? (
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {visible.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  enrolled={user?.enrollments?.includes(course.id)}
                />
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-[1.6rem] border border-dashed border-line bg-cream px-6 py-16 text-center">
              <h2 className="font-display text-3xl text-ink">No courses match that search.</h2>
              <p className="mx-auto mt-3 max-w-md text-ink-soft">
                Try another word, or clear the filters to see the full winter catalog.
              </p>
              <button
                type="button"
                className="btn btn-primary mt-6"
                onClick={() => updateParams({ q: '', category: 'All' })}
              >
                Show all courses
              </button>
            </div>
          )}
        </Container>
      </section>
    </div>
  )
}
