import { useEffect, useState } from 'react'
import { CloseIcon, MenuIcon } from './Icons'
import { navLinks, profile } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      const offset = window.scrollY + 140
      let current = '#home'
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href)
        if (section && section.offsetTop <= offset) current = link.href
      })
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header className="topbar">
        <a href="#home" className="logo" onClick={close}>
          {profile.initials.split('')[0]}
          <span>{profile.initials.split('')[1]}</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href ? 'active' : ''}
            >
              {link.label}
            </a>
          ))}
          <a className="btn btn-primary nav-cv" href={profile.resume} download>
            Download CV
          </a>
        </nav>

        <button
          className="menu-btn"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon size={26} /> : <MenuIcon size={26} />}
        </button>
      </header>

      <div
        className={`drawer-backdrop${open ? ' open' : ''}`}
        onClick={close}
        aria-hidden={!open}
      />

      <aside className={`drawer${open ? ' open' : ''}`} aria-hidden={!open}>
        <div className="drawer-head">
          <strong className="logo">
            {profile.initials.split('')[0]}
            <span>{profile.initials.split('')[1]}</span>
          </strong>
          <button className="menu-btn" aria-label="Close menu" onClick={close}>
            <CloseIcon size={24} />
          </button>
        </div>
        <nav aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href ? 'active' : ''}
              onClick={close}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-primary" href={profile.resume} download onClick={close}>
          Download CV
        </a>
      </aside>
    </>
  )
}
