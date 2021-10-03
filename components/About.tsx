import Image from 'next/image'
import NextJsIcon from '@/public/skills/nextjs.svg'
import ReactJsIcon from '@/public/skills/reactjs.svg'
import TailwindIcon from '@/public/skills/tailwind.svg'
import ChakraIcon from '@/public/skills/chakra.svg'

const About = () => {
  const skills = [
    {
      name: 'NextJs',
      icon: NextJsIcon
    },
    {
      name: 'ReactJs',
      icon: ReactJsIcon
    },
    {
      name: 'TailwindCss',
      icon: TailwindIcon
    },
    {
      name: 'ChakaraUI',
      icon: ChakraIcon
    }
  ]
  return (
    <section id='About' className='pt-[10rem] mt-[20rem]'>
      <h3>About</h3>
      <p>
        I am a self taught developer based in Houston, Texas. As a naturally curious person, I enjoy learning and
        understanding new web technologies. I am passionate about building scalable web applications and internal tools
        that drastically improve user experience.
      </p>
      <h4 className='text-4xl text-center mt-6'>Favorite technologies</h4>
      <div className='mt-8 flex gap-8 justify-between'>
        {skills.map((skill) => (
          <div key={skill.name} className='hover:scale-110'>
            <Image src={skill.icon} alt='icon' />
            {/* <p className=''>{skill.name}</p> */}
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
