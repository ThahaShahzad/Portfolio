import Image from 'next/image'
import { motion } from 'framer-motion'

import RmPic from '@/public/RM.png'

const Projects = () => {
  const projects = [
    {
      name: 'Reliability Measures',
      desription:
        ' Collaborated to build a tool which could analyze and evaluate the efficacy of exams and teaching strategies to improve students’ learning outcomes. Created a responsive and intuitive UI for users. Lead the front-end development efforts to create a web app.',
      techUsed: ['React', 'Bootstrap', 'Redux'],
      img: RmPic
    },
    {
      name: 'Polestar Global',
      desription:
        'Designed a proof of concept to provide efficient search and filter  features for ship tracking data. Coordinated efforts with the back-end team to efficiently achieve project goals. Utilized Google Maps API to visualize ship movement.',
      techUsed: ['React', 'Bootstrap', 'Redux'],
      img: RmPic
    }
  ]
  return (
    <section className='mt-[30rem]'>
      <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: 'anticipate', duration: 2 }}>
        Projects
      </motion.h3>
      <div className='mt-12'>
        {projects.map((project, i) => (
          <motion.div
            initial={{ x: `${i % 2 === 1 ? '100%' : '-100%'}` }}
            animate={{ x: 0 }}
            key={project.name}
            transition={{ ease: 'anticipate', duration: 2 }}
            className={`flex flex-col gap-4 mt-20 ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} `}>
            <Image src={project.img} alt='project image' />
            <div>
              <h4>{project.name}</h4>
              <p>{project.desription}</p>
              <p className='mt-2 font-semibold text-primary'>
                Technoligies used :
                {project.techUsed.map((tech) => (
                  <span key={tech}> {tech} </span>
                ))}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
