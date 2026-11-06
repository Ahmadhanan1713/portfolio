import { navLinks, profile } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="footer-brand">
          Ahmad <span>Hanan</span>
        </p>
        <div className="footer-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
        <p className="footer-copy">{year} © Copyright Reserved</p>
      </div>
    </footer>
  )
}
