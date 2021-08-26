import { GetStaticProps } from 'next'

const Hero = () => {
  return (
    <section className='pt-96 '>
      <p>Hi, my name is </p>
      <h1>Thaha Shahzad</h1>
      <p className='mb-2'>Self-Taught Front-end Developer</p>
      {/* <p>I am a self taught developer based in Houston, Texas.</p> */}
    </section>
  )
}

export default Hero
