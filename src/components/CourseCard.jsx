import { Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/format'
import Stars from './Stars'

export default function CourseCard({ course, enrolled = false }) {
  return (
    <Link
      to={`/courses/${course.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-line bg-cream shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(18,32,51,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pine"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-sand">
        <img
          src={course.image}
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-cream/95 px-3 py-1 text-xs font-semibold text-ink">
          {course.level}
        </span>
        {enrolled ? (
          <span className="absolute right-3 top-3 rounded-full bg-pine px-3 py-1 text-xs font-semibold text-cream">
            Enrolled
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-pine">{course.category}</p>
        <h3 className="mt-2 font-display text-2xl leading-tight text-ink group-hover:text-pine-deep">
          {course.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-soft">{course.summary}</p>
        <p className="mt-4 text-sm text-ink-soft">with {course.instructor.name}</p>
        <div className="mt-4 mb-5">
          <Stars value={course.rating} reviews={course.reviews} />
        </div>
        <div className="mt-auto flex items-center justify-between border-t border-line pt-4">
          <span className="font-display text-2xl text-ink">{formatPrice(course.price)}</span>
          <span className="inline-flex items-center gap-1.5 text-sm text-mist">
            <Clock className="h-4 w-4" aria-hidden="true" />
            {course.duration}
          </span>
        </div>
      </div>
    </Link>
  )
}
