import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.section
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      transition={{ ease: 'anticipate', duration: 1 }}
      className='mt-[30rem]'>
      <h3>About</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt non eos ullam deleniti inventore, quis
        voluptatibus, pariatur delectus doloribus officia consectetur quasi. Cum repellat perspiciatis culpa quisquam,
        maiores doloremque dolore.
      </p>
    </motion.section>
  )
}

export default About
