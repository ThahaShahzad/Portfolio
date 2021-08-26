import Head from 'next/head'
import Link from 'next/link'
import { BiArrowBack, BiDownload } from 'react-icons/bi'

const resume = () => {
  return (
    <main className='font-all bg-bg text-font h-full dark'>
      <Head>
        <title>Thaha Shahzad - Resume</title>
        <meta name='description' content='My Resume' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <div className='max-w-screen-xl m-auto p-4 text-center md:text-left'> */}
      <section className='text-center pt-4'>
        <div className='flex justify-between'>
          <Link href='/' passHref>
            <BiArrowBack className='m-5 w-12 h-12 hover:scale-110' />
          </Link>
          <h1>Thaha Shahzad</h1>
          <a href='ThahaShahzad Resume.pdf'>
            <BiDownload className='m-5 w-12 h-12 hover:scale-110' />
          </a>
        </div>
        <div className='max-w-screen-xl m-auto p-4 text-center md:text-left'>
          <h4 className='text-center'>Front End Developer</h4>
          <h4 className='text-left mt-5'>Experience</h4>
          <article className='text-left'>
            <h4 className='mt-4 text-xl'>Reliability Measures - 3 month (contract) </h4>
            <p className='mt-2 font-bold'>Used: React.js, Redux, React-Router Dom, and React-Hook-Form</p>
            <p className='mt-2'>
              Built a tool which could analyze and evaluate the effectiveness of exams and teaching strategies to
              improve students’ learning outcomes
            </p>
          </article>
          <article className='text-left'>
            <h4 className='mt-4 text-xl'>Pole Star Global - 3 month (internship) </h4>
            <p className='mt-2 font-bold'>Used: React.js, Redux, React-Router Dom, and React-Hook-Form</p>
            <p className='mt-2'>
              Designed a proof of concept to provide efficient search and filter features for ship tracking data
            </p>
          </article>
          <article className='text-left'>
            <h4 className='mt-5'>Skills</h4>
            <div className='flex justify-between mt-4'>
              <ul>
                <li className='underline font-bold mb-1'>Proficient</li>
                <li>JavaScript/TypeScript</li>
                <li>React.JS</li>
                <li>Redux</li>
                <li>Tailwind Css</li>
                <li>Node.JS</li>
                <li>Express.JS</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>AWS</li>
              </ul>
              <ul>
                <li className='underline font-bold mb-1'>Competent</li>
                <li>CSS/SASS</li>
                <li>GraphQL</li>
                <li>Chakara UI</li>
                <li>Java</li>
                <li>Python</li>
                <li>Flask</li>
                <li>Jest</li>
              </ul>
              <div></div>
            </div>
          </article>
          <article className='text-left'>
            <h4 className='mt-5'>Education</h4>
            <p className='mt-2'>Associates of Science | Houston Community College</p>
          </article>
        </div>
      </section>
      {/* </div> */}
    </main>
  )
}

export default resume
