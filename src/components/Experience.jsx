import { motion } from 'framer-motion'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          Experience & <span>Work</span>
        </motion.h2>

        <div className="timeline">
          {experience.map((item) => (
            <motion.article
              className="timeline-card"
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
            >
              <h3>{item.title}</h3>
              <p className="period">{item.period}</p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
