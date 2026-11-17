import { useState } from 'react'
import { Check, ChevronDown, Clock, MapPin, Users } from 'lucide-react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Container from '../components/Container'
import Stars from '../components/Stars'
import { useAuth } from '../context/AuthContext'
import { getCourse } from '../data/courses'
import { usePageTitle } from '../hooks/usePageTitle'
import { formatPrice } from '../utils/format'

export default function CourseDetails() {
  const { id } = useParams()
  const course = getCourse(id)
  usePageTitle(course ? course.title : 'Course not found')

  if (!course) {
    return (
      <div className="page">
        <Container className="py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pine">Catalog</p>
          <h1 className="mt-3 font-display text-4xl text-ink">That course is not in this term.</h1>
          <p className="mx-auto mt-3 max-w-md text-ink-soft">
            The link may be out of date. The winter catalog is still open.
          </p>
          <Link to="/courses" className="btn btn-primary mt-6">
            Back to courses
          </Link>
        </Container>
      </div>
    )
  }

  return <CourseView course={course} />
}

function CourseView({ course }) {
  const { user, enroll } = useAuth()
  const navigate = useNavigate()
  const [openIndex, setOpenIndex] = useState(0)
  const [confirmed, setConfirmed] = useState(false)
  const enrolled = Boolean(user?.enrollments?.includes(course.id))

  const facts = [
    ['Duration', course.duration],
    ['Weekly time', course.weekly],
    ['Level', course.level],
    ['Lessons', `${course.lessons} lessons`],
    ['Format', course.format],
    ['Language', course.language],
  ]

  const handleEnroll = () => {
    if (!user) {
      navigate('/login', {
        state: {
          from: `/courses/${course.id}`,
          notice: `Sign in to enroll in ${course.title}.`,
        },
      })
      return
    }
    enroll(course.id)
    setConfirmed(true)
  }

  return (
    <div className="page">
      <Container className="py-8 md:py-12">
        <nav className="text-sm text-mist" aria-label="Breadcrumb">
          <Link to="/courses" className="font-semibold text-pine hover:text-pine-deep">
            Courses
          </Link>
          <span aria-hidden="true"> / </span>
          <span className="text-ink-soft">{course.title}</span>
        </nav>

        <div className="mt-6 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div>
            <div className="overflow-hidden rounded-[1.8rem] bg-sand">
              <img
                src={course.image}
                alt=""
                className="aspect-[16/9] w-full object-cover"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-pine/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-pine">
                {course.category}
              </span>
              <Stars value={course.rating} reviews={course.reviews} />
            </div>
            <h1 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">{course.title}</h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-soft">{course.summary}</p>

            {confirmed ? (
              <p className="mt-6 rounded-2xl bg-pine/10 px-4 py-3 text-sm font-medium text-pine-deep" role="status">
                You are enrolled in {course.title}. This demo saved the seat in your browser.
              </p>
            ) : null}

            <section className="mt-10">
              <h2 className="font-display text-3xl text-ink">Overview</h2>
              <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
                {course.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p>
                  <span className="font-semibold text-ink">Capstone. </span>
                  {course.capstone}
                </p>
              </div>
            </section>

            <section className="mt-10">
              <h2 className="font-display text-3xl text-ink">Learning outcomes</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {course.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3 rounded-2xl border border-line bg-cream p-4 text-sm leading-relaxed text-ink-soft">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-pine" aria-hidden="true" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-10">
              <h2 className="font-display text-3xl text-ink">Syllabus</h2>
              <p className="mt-2 text-sm text-ink-soft">{course.duration} · {course.lessons} lessons</p>
              <div className="mt-4 divide-y divide-line overflow-hidden rounded-[1.4rem] border border-line bg-cream">
                {course.syllabus.map((module, index) => {
                  const open = openIndex === index
                  const panelId = `${course.id}-week-${index}`
                  return (
                    <div key={module.title}>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-paper"
                        aria-expanded={open}
                        aria-controls={panelId}
                        onClick={() => setOpenIndex(open ? -1 : index)}
                      >
                        <span>
                          <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-mist">
                            Week {index + 1}
                          </span>
                          <span className="mt-1 block font-display text-xl text-ink">{module.title}</span>
                        </span>
                        <ChevronDown className={`h-5 w-5 shrink-0 text-ink transition ${open ? 'rotate-180' : ''}`} />
                      </button>
                      {open ? (
                        <ul id={panelId} className="space-y-2 px-5 pb-5">
                          {module.topics.map((topic) => (
                            <li key={topic} className="flex gap-2 text-sm text-ink-soft">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" aria-hidden="true" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  )
                })}
              </div>
            </section>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28">
            <div className="rounded-[1.6rem] border border-line bg-cream p-6 shadow-sm">
              <p className="text-sm text-mist">Tuition for the cohort</p>
              <p className="mt-1 font-display text-4xl text-ink">{formatPrice(course.price)}</p>
              <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                <li className="flex gap-2"><Check className="h-4 w-4 text-pine" /> Weekly live seminar</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-pine" /> Studio hours with faculty</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-pine" /> Project review and certificate</li>
              </ul>
              <button
                type="button"
                className="btn btn-primary mt-6 w-full"
                onClick={handleEnroll}
                disabled={enrolled}
              >
                {enrolled ? 'Enrolled' : 'Enroll now'}
              </button>
              <p className="mt-3 text-center text-xs leading-relaxed text-mist">
                {user
                  ? 'Enrollment is saved with your demo account on this device.'
                  : 'You will sign in before the seat is saved.'}
              </p>
            </div>

            <dl className="rounded-[1.6rem] border border-line bg-cream p-6">
              {facts.map(([label, value]) => (
                <div key={label} className="flex items-start justify-between gap-4 border-b border-line py-3 last:border-b-0">
                  <dt className="text-sm text-mist">{label}</dt>
                  <dd className="text-right text-sm font-semibold text-ink">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="rounded-[1.6rem] border border-line bg-cream p-6">
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-pine">Instructor</h2>
              <div className="mt-4 flex items-center gap-3">
                <img
                  src={course.instructor.image}
                  alt=""
                  className="h-16 w-16 rounded-2xl object-cover"
                />
                <div>
                  <p className="font-display text-xl text-ink">{course.instructor.name}</p>
                  <p className="text-sm text-ink-soft">{course.instructor.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{course.instructor.bio}</p>
              <Link
                to={`/courses?q=${encodeURIComponent(course.instructor.name)}`}
                className="mt-4 inline-flex text-sm font-semibold text-pine hover:text-pine-deep"
              >
                More from {course.instructor.name.split(' ')[0]}
              </Link>
              <div className="mt-4 flex flex-wrap gap-3 text-xs text-mist">
                <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {course.duration}</span>
                <span className="inline-flex items-center gap-1"><Users className="h-3.5 w-3.5" /> 18 seats</span>
                <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> Cambridge</span>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  )
}
