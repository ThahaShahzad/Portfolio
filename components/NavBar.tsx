import Image from 'next/image'
import useScrollPosition from './hooks/useScrollPos'

const NavBar = () => {
  const navLinks = [
    {
      name: 'About'
    },
    {
      name: 'Projects'
    },
    {
      name: 'Contact'
    },
    {
      name: 'Resume'
    }
  ]
  const scrollPosition = useScrollPosition()
  return (
    <header
      className={`hidden lg:flex justify-between items-center px-10 py-6 z-10 bg-bg fixed top-0 inset-x-0 ${
        scrollPosition !== 0 && 'border-b-2 border-bg-light'
      }`}>
      <div className='flex items-center gap-4' onClick={() => window.scrollTo(0, 0)}>
        {/* <Image
          src={'https://alrigh.com/wp-content/uploads/2020/06/19-tom-profile-picture.webp'}
          width='60'
          height='60'
          alt='profile pic'
          className='rounded-full'
        /> */}
        {/* <h3>Thaha Shahzad</h3> */}
      </div>
      <nav className='flex items-center gap-12 list-none'>
        {navLinks.map((link) => (
          <li
            key={link.name}
            className={`border-b-2 border-transparent hover:scale-105 hover:border-font cursor-pointer ${
              link.name === 'Resume' && 'border-2 border-font p-2'
            }`}>
            <a href={`${link.name === 'Resume' ? 'resume' : `#${link.name}`}`}>{link.name}</a>
          </li>
        ))}
      </nav>
    </header>
  )
}

export default NavBar
