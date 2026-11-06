import { motion } from 'framer-motion'
import { education } from '../data/content'

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          Edu<span>cation</span>
        </motion.h2>

        <div className="education-grid">
          {education.map((item, index) => (
            <motion.article
              className="education-card"
              key={item.degree}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <p className="period">{item.period}</p>
              <h3>{item.degree}</h3>
              <p className="school">{item.school}</p>
              <p className="location">{item.location}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
