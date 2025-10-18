import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const FeatureCard = ({ number, title, description, delay }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="w-12 h-12 bg-primary-orange/10 rounded-full flex items-center justify-center mb-4">
        <span className="text-2xl font-bold text-primary-orange">[{number}]</span>
      </div>
      <h3 className="text-2xl font-bold text-text-dark mb-3">{title}</h3>
      <p className="text-text-gray leading-relaxed">{description}</p>
    </motion.div>
  )
}

const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-text-dark mb-6">
            How It Works
          </h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            When your agent makes a mistake, Knowledge Hub turns corrections into persistent learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            number="1"
            title="Mark it Wrong"
            description="Agent gives incorrect answer or performs wrong action. You mark it wrong and provide the correction."
            delay={0.1}
          />
          <FeatureCard
            number="2"
            title="Create Playbook"
            description="Correction automatically becomes a Playbook - a persistent rule. Stored as simple YAML, git-friendly, version-controlled."
            delay={0.2}
          />
          <FeatureCard
            number="3"
            title="Learning Applied"
            description="Next time a similar situation occurs, agent checks Playbooks first. Uses the correction. No repeated mistake."
            delay={0.3}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-text-gray max-w-2xl mx-auto">
            <span className="font-semibold text-text-dark">Over time:</span> More corrections → More Playbooks → More reliable agent.{' '}
            Like teaching a junior developer - they learn from corrections and don't repeat mistakes.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
