import { motion } from 'framer-motion'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="section-title">
            Pro<span>jects</span>
          </h2>
          <p className="section-note">~ Review some of my projects at your convenience</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="project-visual">
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="project-body">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul className="tech-row">
                  {project.tech.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="project-actions">
                  {project.url ? (
                    <a
                      className="btn btn-outline"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <span className="btn btn-outline btn-disabled" title="Link coming soon">
                      Live Demo
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
