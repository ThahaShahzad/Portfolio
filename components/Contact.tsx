import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'

const Contact = () => {
  return (
    <section id='Contact' className='mt-[30rem] mb-[10rem]'>
      <h3>Contact me</h3>
      <div className='mt-12'>
        <p>Thank you for your intrest. The best way to get in contact with me is my email</p>
        <a className='font-extrabold block mt-10' href='mailto:thaha.shahzads@gmail.com'>
          thaha.shahzads@gmail.com
        </a>
      </div>
      <div className='flex gap-12 pt-40 justify-center items-center'>
        <a className='hover:scale-110' href='mailto:thaha.shahzads@gmail.com'>
          <AiOutlineMail className='w-10 h-10' />
        </a>
        <a className='hover:scale-110' href='https://github.com/ThahaShahzad' target='_blank' rel='noreferrer'>
          <AiFillGithub className='w-10 h-10' />
        </a>
        <a
          className='hover:scale-110'
          href='https://www.linkedin.com/in/thaha-shahzad-5493551a0/'
          target='_blank'
          rel='noreferrer'>
          <AiFillLinkedin className='w-10 h-10' />
        </a>
      </div>
    </section>
  )
}

export default Contact
