import Contact from '@/components/Contact'
import MobileNav from '@/components/MobileNav'
import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Container from '../components/Container'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import Projects from '../components/Projects'

const Home: NextPage = () => {
  return (
    <div className='font-all bg-bg text-font h-full dark overflow-hidden'>
      <Head>
        <title>Thaha Shahzad</title>
        <meta name='description' content='My protfolio website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      <MobileNav />
      <Container>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Container>
    </div>
  )
}

export default Home
