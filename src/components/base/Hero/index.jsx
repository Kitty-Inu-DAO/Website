import { motion } from 'framer-motion'

const variants = {
  hidden: {
    scale: 0.7,
    opacity: 0,
  },
  visible: {
    scale: 0.9,
    opacity: 1,
    transition: {
      delay: 0.8,
    },
  },
}

export default function Hero({
  title = 'Kitty Inu DAO',
  description = 'We are the Kitty Inu DAO',
}) {
  return (
    <motion.div
      className='relative'
      initial='hidden'
      animate='visible'
      variants={variants}
    >
      <h1 className='kartooni mt-10'>{title}</h1>
      <p className='absolute top-1/2 left-1/2'>{description}</p>
    </motion.div>
  )
}
