import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <motion.section
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      transition={{ ease: 'anticipate', duration: 1 }}
      className='mt-[30rem] mb-[30rem]'>
      <h3>Contact me</h3>
      <div className='mt-12'>
        <p>Thank you for your intrest. The best way to get in contact with me is my email</p>
        <a className='font-extrabold block mt-10' href=' mailto:thaha.shahzads@gmail.com'>
          thaha.shahzads@gmail.com
        </a>
      </div>
    </motion.section>
  )
}

export default Contact
