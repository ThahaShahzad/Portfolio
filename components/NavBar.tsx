import { useTheme } from 'next-themes'
import Image from 'next/image'

const NavBar = () => {
  const { theme, setTheme } = useTheme()
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
  //fixed top-0 inset-x-0
  return (
    <header className='hidden lg:flex justify-between items-center px-10 pt-8 z-10 bg-bg fixed top-0 inset-x-0'>
      <div className='flex items-center gap-4'>
        <Image
          src={'https://alrigh.com/wp-content/uploads/2020/06/19-tom-profile-picture.webp'}
          width='60'
          height='60'
          alt='profile pic'
          className='rounded-full'
        />
        {/* <h3>Thaha Shahzad</h3> */}
      </div>
      {/* <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>theme</button> */}
      <nav className='flex items-center gap-4 list-none'>
        {navLinks.map((link) => (
          <li
            key={link.name}
            className={`border-b-2 border-transparent hover:scale-105 hover:border-font cursor-pointer ${
              link.name === 'Resume' && 'border-2 border-font p-2'
            }`}>
            <p>{link.name}</p>
          </li>
        ))}
      </nav>
    </header>
  )
}

export default NavBar
