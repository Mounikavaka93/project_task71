import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Clock3,
  Code2,
  Feather,
  FlaskConical,
  LineChart,
  PenTool,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CourseCard from '../components/CourseCard'
import SectionHeading from '../components/SectionHeading'
import { useAuth } from '../context/AuthContext'
import { getCategories, getFeaturedCourses } from '../data/courses'
import { principles, stats, testimonials } from '../data/site'
import { usePageTitle } from '../hooks/usePageTitle'
import { firstName } from '../utils/format'

const categoryIcons = {
  Design: PenTool,
  Software: Code2,
  Data: LineChart,
  Business: Briefcase,
  Writing: Feather,
  Science: FlaskConical,
}

const steps = [
  {
    icon: BookOpen,
    title: 'Read the syllabus',
    text: 'Every course lists the weeks, the work, and the person teaching it. Choose with the details in view.',
  },
  {
    icon: Users,
    title: 'Join eighteen people',
    text: 'Seminars are live. Studio hours are for the work in progress, not for another recording.',
  },
  {
    icon: Clock3,
    title: 'Leave with a piece',
    text: 'The term ends with something you can show: a system, a script, an essay, a field study.',
  },
]

export default function Home() {
  usePageTitle('')
  const { user } = useAuth()
  const featured = getFeaturedCourses()
  const categories = getCategories()
  const continueCourse = user?.enrollments?.[0]

  return (
    <div className="page">
      {user ? (
        <div className="bg-pine text-cream">
          <Container className="flex flex-wrap items-center justify-between gap-3 py-3 text-sm">
            <p>
              Welcome back, {firstName(user.name)}.
              {user.enrollments.length
                ? ` You have ${user.enrollments.length} course${user.enrollments.length > 1 ? 's' : ''} saved on this device.`
                : ' Your seat is ready whenever you are.'}
            </p>
            <Link
              to={continueCourse ? `/courses/${continueCourse}` : '/courses'}
              className="font-semibold underline decoration-amber underline-offset-4"
            >
              {continueCourse ? 'Continue learning' : 'Browse courses'}
            </Link>
          </Container>
        </div>
      ) : null}

      <section>
        <Container className="grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine">Winter 2027 cohorts are open</p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
              Careful study, <span className="italic text-pine">in good company.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Liorwyn Hall is a Cambridge school for design, software, data, writing, and science. Cohorts stay small.
              Faculty still do the work. You leave with something you can defend.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/courses" className="btn btn-primary">
                Explore courses
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className="btn btn-outline">
                About the hall
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-sand shadow-[0_30px_60px_-36px_rgba(18,32,51,0.7)] sm:aspect-[5/4] lg:aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
                alt="Students gathered around a table during a Liorwyn seminar"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-line bg-cream/95 p-4 shadow-lg backdrop-blur sm:left-auto sm:max-w-xs">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-pine">Next cohort</p>
              <p className="mt-1 font-display text-2xl text-ink">January 11, 2027</p>
              <p className="mt-1 text-sm text-ink-soft">18 seats, on campus and live online</p>
            </div>
          </div>
        </Container>
      </section>

      <Container className="pb-6">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[1.6rem] border border-line bg-line sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex min-h-32 flex-col justify-center bg-cream px-5 py-6">
              <dt className="font-display text-4xl text-ink">{stat.value}</dt>
              <dd className="mt-1 text-sm text-ink-soft">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </Container>

      <section className="py-16 md:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="This term"
              title="Featured courses"
              text="Three studios with open seats. Each one ends with work you can walk someone through."
            />
            <Link to="/courses" className="inline-flex items-center gap-2 font-semibold text-pine transition hover:gap-3">
              View the catalog
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((course) => (
              <CourseCard key={course.id} course={course} enrolled={user?.enrollments?.includes(course.id)} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Disciplines"
            title="Popular categories"
            text="Ordered by the rooms our students keep coming back to. Every category in the current catalog is here."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const Icon = categoryIcons[category.name]
              return (
                <Link
                  key={category.name}
                  to={`/courses?category=${encodeURIComponent(category.name)}`}
                  className="group flex h-full flex-col rounded-[1.6rem] border border-line bg-paper p-6 transition duration-300 hover:-translate-y-1 hover:border-pine hover:bg-pine hover:text-cream"
                >
                  <Icon className="h-6 w-6 text-pine transition group-hover:text-amber" aria-hidden="true" />
                  <h3 className="mt-8 font-display text-3xl">{category.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft transition group-hover:text-cream/80">
                    {category.blurb}
                  </p>
                  <p className="mt-auto pt-6 text-sm font-semibold">
                    {category.count} {category.count === 1 ? 'course' : 'courses'}
                  </p>
                </Link>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] bg-sand">
            <img
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1400&q=80"
              alt="Sunlight across the reading room shelves near the Liorwyn studio"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="How a term works"
              title="A room, a syllabus, a deadline."
              text="Liorwyn Hall is deliberately unsurprising. You know who is teaching, what the weeks contain, and what you will make."
            />
            <ol className="mt-8 space-y-5">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cream text-pine shadow-sm">
                    <step.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mist">0{index + 1}</p>
                    <h3 className="font-display text-2xl text-ink">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="From the studio"
            title="Student notes"
            text="A few words from people who finished a cohort and kept the work."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <figure key={item.name} className="flex h-full flex-col rounded-[1.6rem] border border-line bg-paper p-6">
                <span className="font-display text-5xl leading-none text-amber" aria-hidden="true">
                  “
                </span>
                <blockquote className="mt-2 flex-1 text-base leading-relaxed text-ink">{item.quote}</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-4">
                  <img src={item.image} alt="" className="h-12 w-12 rounded-full object-cover" />
                  <span>
                    <span className="block font-semibold text-ink">{item.name}</span>
                    <span className="block text-sm text-mist">
                      {item.role} · {item.course}
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section className="px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink px-6 py-12 text-cream sm:px-12 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">January 11</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl leading-tight md:text-5xl">
            Bring a question. Leave with a practice.
          </h2>
          <p className="mt-4 max-w-lg text-cream/75">
            Cohorts are live, capped, and taught by people who still do the work during the week.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/courses" className="btn btn-amber">
              Browse courses
            </Link>
            <Link to="/contact" className="btn btn-outline-light">
              Ask a question
            </Link>
          </div>
          <div className="mt-10 hidden gap-6 border-t border-cream/10 pt-6 sm:grid sm:grid-cols-3">
            {principles.map((item) => (
              <p key={item.title} className="text-sm text-cream/70">
                <span className="block font-semibold text-cream">{item.title}</span>
                {item.text}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
