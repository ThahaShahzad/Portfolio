import Head from 'next/head'
import Link from 'next/link'
import { BiArrowBack, BiDownload } from 'react-icons/bi'

const resume = () => {
  const experiences = [
    {
      company: 'Hilton',
      title: 'Solution Architect developer',
      date: 'Oct2022 - present',
      technologies: ['Java', 'Nodejs', 'Jira'],
      points: [
        'Support Core Agile team activities, such as managing the maintenance of the sprint backlog, and participating in backlog refinement, sprint planning, and sprint.',
        'Provided production support by fixing incidents and problems, and assist in continuous improvement efforts',
        'Implement coding standards and procedures and participate in code reviews.'
      ]
    },
    {
      company: 'North Shore Automation',
      title: 'React Developer',
      date: 'May 2022 - Oct2022',
      technologies: ['React', 'Jira', 'Docker'],
      points: [
        'Meeting with the development team to discuss user interface ideas and applications.',
        'Documenting application changes and agile development in ReactJS using Jira, GitLab, confluence, and docker.'
      ]
    },
    {
      company: 'InvestViv',
      title: 'Independent contractor (Front end)',
      date: 'Oct 2020 - Feb 2022',
      technologies: ['Nextjs', 'Typescript', 'TailwindCSS'],
      points: ['Integrated with backend team to create dynamic web applications using UX/UI mockups.']
    },
    {
      company: 'TokenSpace',
      title: 'Independent contractor (Lead developer)',
      date: 'Oct 2020 - Feb 2022',
      technologies: ['Nextjs', 'Typescript', 'TailwindCSS'],
      points: [
        'Lead a team of developers to design and develop mobile/ web applications.',
        'Assigned coding tasks to various members. Directed team meetings to check on progress and plan code direction.'
      ]
    },
    {
      company: 'Polestar Global',
      title: 'Software Intern',
      date: 'Jun - Sep 2020',
      technologies: ['React', 'Redux', 'GoogleMaps'],
      points: [
        'Designed a proof of concept to provide efficient search and filter features for ship tracking data using ReactJS, and Python/Flask API.',
        'Coordinated with team lead to efficiently achieve project goals.',
        'Utilized Google Maps API to visualize ship movement.'
      ]
    },
    {
      company: 'Reliability Measures',
      title: 'Front End Developer',
      date: 'Mar - Jun 2020',
      technologies: ['React', 'Flask', 'Bootstrap'],
      points: [
        'Collaborated to build a tool which could analyze and evaluate the efficiency of exams and teaching strategies which improved students’ learning outcomes.',
        'Lead the front-end development efforts to create a web app using test-driven agile development methodology (React.js, Redux), which allows users to interface with the analysis tool.',
        'Coordinated with the back-end team and project lead to improve the API (Python/Flask/MySQL), efficiently allocate resources, and meet project goals.'
      ]
    }
  ]
  const skills1 = [
    'JavaScript',
    'TypeScript',
    'Java',
    'Python',
    'HTML',
    'CSS',
    'React.js',
    'Nextjs',
    'Node.js',
    'Express.js',
    'Flask'
  ]
  const skills2 = [
    'Prisma',
    'Firebase',
    'Redux',
    'ChakraUI',
    'TailwindCSS',
    'DynamoDB',
    'MongoDB',
    'MySQL',
    'GraphQL',
    'Docker',
    'Figma'
  ]
  return (
    <main className='font-all bg-bg text-font h-full dark'>
      <Head>
        <title>Thaha Shahzad - Resume</title>
        <meta name='description' content='My Resume' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='text-center pt-4'>
        <div className='flex justify-between'>
          <Link href='/' passHref>
            <BiArrowBack className='m-5 w-12 h-12 hover:scale-110' />
          </Link>
          <h1>Thaha Shahzad</h1>
          <a href='ThahaShahzad Resume.pdf' target='_blank' rel='noreferrer'>
            <BiDownload className='m-5 w-12 h-12 hover:scale-110' />
          </a>
        </div>
        <div className='max-w-screen-xl m-auto p-4 text-center md:text-left'>
          <h3 className='text-left mt-5'>Experience</h3>
          {experiences.map((experience) => (
            <article key={experience.company} className='text-left'>
              <h4 className='mt-4 text-xl'>
                {experience.title} - {experience.company} - {experience.date}
              </h4>
              <p className='mt-2 ml-2 text-lg font-bold'>
                Technologies: {experience.technologies?.map((tech) => tech.concat(' '))}
              </p>
              <ul className='ml-8'>
                {experience.points.map((point) => (
                  <li key={point} className='mt-2 list-disc'>
                    {' '}
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
          <article className='text-left'>
            <h4 className='mt-5'>Skills</h4>
            <div className='flex justify-between mt-4'>
              <ul>
                {skills1.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              <ul>
                {skills2.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
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
    </main>
  )
}

export default resume
