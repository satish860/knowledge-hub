import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-[56px] font-medium text-text-dark leading-[60px] tracking-tighter-xl mb-8"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Make Your AI Agents{' '}
          <span className="inline-block">
            <span className="text-primary-orange">Trainable</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl md:text-2xl text-text-gray max-w-4xl mx-auto mb-12"
        >
          Your agent makes a mistake. You fix it. Tomorrow, same mistake again.{' '}
          <span className="font-semibold text-text-dark">Knowledge Hub adds a training layer</span> -
          corrections become Playbooks that persist. Build agents that actually learn.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-7 py-2 bg-primary-orange text-white text-xs rounded-lg hover:opacity-90 transition-all cursor-pointer"
          >
            Join Waitlist
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-7 py-2 bg-white text-text-dark text-xs rounded-lg border-2 border-gray-300 hover:border-primary-orange transition-all cursor-pointer"
          >
            Learn More
          </motion.button>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
            rotateX: 45,
            scale: 0.9
          }}
          whileInView={{
            opacity: 1,
            y: -60,
            rotateX: 24,
            scale: 1
          }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d"
          }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-8 max-w-5xl mx-auto border border-gray-200">
            <img
              src="https://framerusercontent.com/images/7uAhEe0FhQwnpoFoBIxfF5pKtw.png"
              alt="Knowledge Hub Dashboard"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
