import { Link } from 'react-router-dom'
import Container from '../components/Container'
import PageHeader from '../components/PageHeader'
import { instructors, milestones, principles, teamOrder } from '../data/site'
import { usePageTitle } from '../hooks/usePageTitle'

export default function About() {
  usePageTitle('About')

  return (
    <div className="page">
      <PageHeader
        eyebrow="About the hall"
        title="A school that stayed small."
        text="Liorwyn Hall opened in 2014 in a rented room above a bookshop in Cambridge. The catalog grew. The room size did not."
      />

      <section className="py-16 md:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] bg-sand">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80"
              alt="A seminar in session, with students seated around a shared table"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl text-ink md:text-4xl">Organization</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-soft">
              <p>
                We teach design, software, data, business, writing, and science to people who want a term of serious
                study alongside a job. Classes meet live. Materials stay with the cohort. Faculty are working
                practitioners, not a rotating bench of hosts.
              </p>
              <p>
                The hall is independent. There is no application essay and no prestige filter. There is a
                syllabus, a seat cap of eighteen, and a piece of work due at the end. Campus sessions meet at 18
                Brattle Street. The same seminars run online for students who cannot cross the river.
              </p>
              <p>
                If you are looking for a content library you can binge, this is the wrong school. If you want a room
                that expects the work, you are in the right one.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <Container className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-line bg-cream p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pine">Mission</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">
              Make serious learning feel human.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Keep cohorts small enough for critique. Hire faculty who still practice. End every course with work a
              student can show to a colleague, a client, or themselves six months later.
            </p>
          </article>
          <article className="rounded-[2rem] bg-pine p-8 text-cream md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">Vision</p>
            <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
              A school people return to for the next chapter.
            </h2>
            <p className="mt-4 leading-relaxed text-cream/80">
              We want Liorwyn Hall to be a place alumni come back to when the work changes: a designer learning to read a
              business, an analyst learning to write, a scientist teaching the public to look.
            </p>
          </article>
        </Container>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <Container>
          <h2 className="font-display text-3xl text-ink md:text-4xl">How we hold the place together</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {principles.map((item) => (
              <article key={item.number} className="rounded-[1.6rem] border border-line bg-paper p-6">
                <p className="font-display text-3xl text-amber">{item.number}</p>
                <h3 className="mt-4 font-display text-2xl text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.text}</p>
              </article>
            ))}
          </div>
          <ol className="mt-10 grid gap-4 md:grid-cols-2">
            {milestones.map((item) => (
              <li key={item.year} className="flex gap-4 rounded-2xl border border-line bg-paper p-5">
                <span className="font-display text-2xl text-pine">{item.year}</span>
                <p className="text-sm leading-relaxed text-ink-soft">{item.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine">Faculty</p>
            <h2 className="mt-2 font-display text-3xl text-ink md:text-4xl">Our team</h2>
            <p className="mt-3 text-ink-soft">
              Six leads run the hall and teach the open courses. You will meet them in seminar, not only on this page.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamOrder.map((id) => {
              const person = instructors[id]
              return (
                <article
                  key={id}
                  className="flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-line bg-cream transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(18,32,51,0.45)]"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-sand">
                    <img src={person.image} alt={`Portrait of ${person.name}`} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-2xl text-ink">{person.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-pine">{person.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">{person.bio}</p>
                  </div>
                </article>
              )
            })}
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-[1.6rem] bg-ink px-6 py-8 text-cream sm:px-8">
            <div>
              <h2 className="font-display text-3xl">Study with this faculty in January.</h2>
              <p className="mt-2 text-sm text-cream/75">Nine courses are open. Seats close when the room is full.</p>
            </div>
            <Link to="/courses" className="btn btn-amber">
              See courses
            </Link>
          </div>
        </Container>
      </section>
    </div>
  )
}
