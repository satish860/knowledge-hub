import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary-orange rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">K</span>
          </div>
          <span className="text-2xl font-bold text-text-dark">Knowledge Hub</span>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-7 py-2 text-text-gray hover:text-text-dark transition-all text-xs">
            Login
          </button>
          <button
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-7 py-2 bg-primary-orange text-white rounded-lg hover:opacity-90 transition-all text-xs cursor-pointer"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
