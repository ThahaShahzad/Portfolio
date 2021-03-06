import Image from 'next/image'

import RmPic from '@/public/RM.png'
import PSPic from '@/public/PSUIFix.jpeg'

const Projects = () => {
  const projects = [
    {
      name: 'Reliability Measures',
      desription:
        ' Collaborated to build a tool which could analyze and evaluate the efficiency of exams and teaching strategies which improved students’ learning outcomes. Created a responsive and intuitive UI for users. Lead the front-end development efforts to create a web app.',
      techUsed: ['React', 'Bootstrap', 'Redux'],
      link: 'https://reliabilitymeasures.com/',
      codeLink: 'https://github.com/Reliability-Measures/RM-UI/tree/release',
      img: RmPic
    },
    {
      name: 'Polestar Global',
      desription:
        'Designed a proof of concept to provide efficient search and filter  features for ship tracking data. Coordinated efforts with the back-end team to efficiently achieve project goals. Utilized Google Maps API to visualize ship movement.',
      techUsed: ['React', 'Bootstrap', 'Redux'],
      link: undefined,
      codeLink: 'https://github.com/ThahaShahzad/React-BootStrap-Redux',
      img: PSPic
    }
  ]
  //405.783×228.25
  return (
    <section id='Projects' className='pt-[10rem] mt-[20rem]'>
      <h3>Projects</h3>
      <div className='mt-12'>
        {projects.map((project, i) => (
          <div
            key={project.name}
            className={`flex flex-col gap-4 mt-20 ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
            <a className={`${project.link && 'hover:scale-105'}`} href={project.link} target='_blank' rel='noreferrer'>
              <Image src={project.img} alt='project image' />
            </a>
            <div>
              <h4>
                <a className={`${project.link && 'underline'}`} href={project.link} target='_blank' rel='noreferrer'>
                  {project.name}
                </a>{' '}
                |{' '}
                <a
                  className='border-b-2 border-transparent hover:border-font'
                  href={project.codeLink}
                  target='_blank'
                  rel='noreferrer'>
                  Code
                </a>
              </h4>
              <p>{project.desription}</p>
              <p className='mt-2 font-semibold text-primary'>
                Technoligies used :
                {project.techUsed.map((tech) => (
                  <span key={tech}> {tech} </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
