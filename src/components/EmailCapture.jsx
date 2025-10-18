import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const EmailCapture = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('https://formspree.io/f/mgvndgbp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section id="waitlist" className="py-32 px-6" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="bg-white rounded-3xl p-12 shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
            Join the Waitlist
          </h2>
          <p className="text-lg text-text-gray mb-8">
            Early access launching <span className="font-semibold text-primary-orange">November 2025</span>
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={status === 'loading' || status === 'success'}
              className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-primary-orange focus:outline-none text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <motion.button
              whileHover={{ scale: status === 'loading' ? 1 : 1.05 }}
              whileTap={{ scale: status === 'loading' ? 1 : 0.95 }}
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="px-7 py-2 bg-primary-orange text-white text-xs rounded-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Submitting...' : status === 'success' ? 'Submitted!' : 'Get Notified'}
            </motion.button>
          </form>

          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-green-600 mt-4 font-medium"
            >
              Thanks for joining! We'll reach out soon.
            </motion.p>
          )}

          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-red-600 mt-4 font-medium"
            >
              Something went wrong. Please try again.
            </motion.p>
          )}

          <p className="text-sm text-text-gray mt-6">
            No spam. Unsubscribe anytime. Open source & self-hosted.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default EmailCapture
