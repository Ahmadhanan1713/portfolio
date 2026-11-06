import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons'
import { profile } from '../data/content'

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = profile.roles[roleIndex]
    const speed = deleting ? 40 : 85

    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1200)
        return
      }

      if (deleting && text === '') {
        setDeleting(false)
        setRoleIndex((index) => (index + 1) % profile.roles.length)
        return
      }

      setText((value) =>
        deleting ? current.slice(0, value.length - 1) : current.slice(0, value.length + 1),
      )
    }, speed)

    return () => clearTimeout(timer)
  }, [text, deleting, roleIndex])

  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <motion.div
          className="avatar-wrap"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="avatar-ring" aria-hidden="true" />
          <div className="avatar-ring delay" aria-hidden="true" />
          <div className="avatar-core">
            <img
              src={profile.photo}
              alt={`${profile.name} profile photo`}
              width={320}
              height={320}
            />
          </div>
        </motion.div>

        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1>{profile.heroHeading}</h1>
          <p className="typed-line" aria-live="polite">
            {text}
            <span className="cursor" aria-hidden="true" />
          </p>
          <p className="hero-support">{profile.heroLine}</p>

          <div className="social-row">
            <a
              className="social-btn"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={20} />
            </a>
            <a
              className="social-btn"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon size={20} />
            </a>
            <a
              className="social-btn"
              href={`mailto:${profile.email}`}
              aria-label="Email"
            >
              <MailIcon size={20} />
            </a>
          </div>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View My Work
            </a>
            <a className="btn btn-primary" href="#contact">
              Let&apos;s Talk
            </a>
            <a className="btn btn-outline" href={profile.resume} download>
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
