import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

const variants = {
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.35,
      delay: 0.5,
    },
  },
  out: {
    opacity: 0,
    scale: 1,
    y: 60,
    transition: {
      duration: 0.35,
    },
  },
}

const Transition = ({ children }) => {
  const { asPath } = useRouter()

  return (
    <div>
      <AnimatePresence initial={false} mode='wait'>
        <motion.div
          key={asPath}
          variants={variants}
          animate='in'
          initial='out'
          exit='out'
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Transition
