import { motion } from 'framer-motion'
import { profile, skillCloud } from '../data/content'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="cloud" aria-hidden="true">
          {skillCloud.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            About <span>ME</span>
          </h2>
          <p className="about-text">{profile.intro}</p>
          <div className="about-actions">
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
