import { useState } from 'react'
import { motion } from 'framer-motion'
import { GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon } from './Icons'
import { profile } from '../data/content'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const subject = String(data.get('subject') || '').trim()
    const message = String(data.get('message') || '').trim()

    const mailto = new URL(`mailto:${profile.email}`)
    mailto.searchParams.set('subject', subject || `Portfolio message from ${name}`)
    mailto.searchParams.set(
      'body',
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    )

    window.location.href = mailto.toString()
    setStatus('Opening your email app to send the message…')
    form.reset()
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="section-title">
            Con<span>tact</span>
          </h2>
          <p className="contact-intro">
            Have a project in mind? Let&apos;s build something great together.
          </p>
        </motion.div>

        <div className="contact-wrap">
          <motion.form
            className="contact-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required placeholder="Your name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="Your email" />
              </div>
              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" required placeholder="Subject" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell me about your project"
                />
              </div>
            </div>
            <button className="btn btn-primary" type="submit" style={{ marginTop: '1rem' }}>
              Send Message
            </button>
            <p className={`form-note${status ? ' success' : ''}`}>
              {status ||
                'This form opens your email app with the message ready to send. For a hosted form later, we can plug in Formspree.'}
            </p>
          </motion.form>

          <motion.aside
            className="contact-aside"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <h3>Get in touch</h3>
            <ul>
              <li>
                <MapPinIcon size={18} />
                {profile.location}
              </li>
              <li>
                <MailIcon size={18} />
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <LinkedInIcon size={18} />
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <GitHubIcon size={18} />
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
