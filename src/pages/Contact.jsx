import { useState } from 'react'
import { Check, Clock, Mail, MapPin, Phone } from 'lucide-react'
import Container from '../components/Container'
import { TextArea, TextField } from '../components/FormControls'
import PageHeader from '../components/PageHeader'
import { contact } from '../data/site'
import { usePageTitle } from '../hooks/usePageTitle'
import { focusFirstError, isEmail, isPhone } from '../utils/validate'

const empty = { name: '', email: '', phone: '', subject: '', message: '' }

function validate(values) {
  const errors = {}
  if (values.name.trim().length < 2) errors.name = 'Enter your name.'
  if (!isEmail(values.email)) errors.email = 'Enter a valid email address.'
  if (!isPhone(values.phone)) errors.phone = 'Enter a phone number with at least 10 digits.'
  if (values.subject.trim().length < 3) errors.subject = 'Add a short subject.'
  if (values.message.trim().length < 20) errors.message = 'Write at least 20 characters so we know how to help.'
  return errors
}

export default function Contact() {
  usePageTitle('Contact')
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(null)

  const onChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      focusFirstError(nextErrors)
      return
    }
    setSent({ name: values.name.trim(), email: values.email.trim() })
    setValues(empty)
  }

  const mapSrc =
    'https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s18+Brattle+Street+Cambridge+MA!6i16'
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.mapQuery)}`

  return (
    <div className="page">
      <PageHeader
        eyebrow="Contact"
        title="Write to the studio."
        text="Questions about a cohort, a seat, or whether a course is the right fit. We read every note."
      />

      <section className="py-12 md:py-16">
        <Container className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div className="rounded-[1.8rem] border border-line bg-cream p-6 sm:p-8">
            {sent ? (
              <div className="py-8" role="status">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-pine text-cream">
                  <Check className="h-6 w-6" />
                </span>
                <h2 className="mt-5 font-display text-3xl text-ink">Thanks, {sent.name.split(' ')[0]}.</h2>
                <p className="mt-3 max-w-lg leading-relaxed text-ink-soft">
                  This demo keeps your message on this device and does not email the hall. For a real note, write{' '}
                  <a className="font-semibold text-pine" href={`mailto:${contact.email}`}>
                    {contact.email}
                  </a>{' '}
                  and we will reply at {sent.email}.
                </p>
                <button type="button" className="btn btn-outline mt-6" onClick={() => setSent(null)}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <TextField id="name" label="Name" value={values.name} onChange={onChange} error={errors.name} autoComplete="name" maxLength={80} />
                  <TextField id="email" label="Email" type="email" value={values.email} onChange={onChange} error={errors.email} autoComplete="email" maxLength={120} />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <TextField id="phone" label="Phone" type="tel" value={values.phone} onChange={onChange} error={errors.phone} autoComplete="tel" placeholder="(617) 555-0148" />
                  <TextField id="subject" label="Subject" value={values.subject} onChange={onChange} error={errors.subject} maxLength={120} />
                </div>
                <TextArea
                  id="message"
                  label="Message"
                  value={values.message}
                  onChange={onChange}
                  error={errors.message}
                  hint="At least 20 characters."
                  maxLength={1000}
                />
                <button type="submit" className="btn btn-primary">
                  Send message
                </button>
                <p className="text-xs leading-relaxed text-mist">
                  Demo form: nothing is sent to a server. Use the email address if you need a real reply.
                </p>
              </form>
            )}
          </div>

          <aside className="space-y-4">
            <div className="rounded-[1.6rem] border border-line bg-cream p-6">
              <h2 className="font-display text-2xl text-ink">Studio</h2>
              <ul className="mt-4 space-y-4 text-sm text-ink-soft">
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-pine" aria-hidden="true" />
                  <a className="font-semibold text-ink hover:text-pine" href={`mailto:${contact.email}`}>
                    {contact.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-pine" aria-hidden="true" />
                  <a className="font-semibold text-ink hover:text-pine" href={`tel:${contact.phoneHref}`}>
                    {contact.phoneDisplay}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-pine" aria-hidden="true" />
                  <address className="not-italic">
                    {contact.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-pine" aria-hidden="true" />
                  <span>
                    {contact.hours.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </li>
              </ul>
            </div>
          </aside>
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="font-display text-3xl text-ink">Find the studio</h2>
              <p className="mt-2 text-ink-soft">18 Brattle Street, a short walk from Harvard Square.</p>
            </div>
            <a href={mapLink} target="_blank" rel="noreferrer" className="text-sm font-semibold text-pine hover:text-pine-deep">
              Open in Google Maps
            </a>
          </div>
          <div className="overflow-hidden rounded-[1.8rem] border border-line bg-sand">
            <iframe
              title="Map showing Liorwyn Hall at 18 Brattle Street, Cambridge"
              src={mapSrc}
              width="600"
              height="450"
              className="h-80 w-full md:h-[26rem]"
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Container>
      </section>
    </div>
  )
}
