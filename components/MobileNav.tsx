import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import useScrollPosition from './hooks/useScrollPos'

const MobileNav = () => {
  const [showSideNav, setshowSideNav] = useState(false)
  const links = [
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
  console.log(scrollPosition)
  const Styles = {
    nav: 'flex lg:hidden justify-between items-center p-6 z-10 bg-bg fixed top-0 inset-x-0',
    sideNav: 'navShadow h-full w-2/3 fixed top-0 right-0 z-20 bg-primary py-8 px-4 rounded-l-2xl sm:w-1/3',
    sideNavIconContainer: 'flex justify-end',
    sideNavIcon: 'w-8 h-8',
    logo: 'flex items-center ml-3',
    logoText: 'ml-3 text-normal',
    navLinks: 'flex flex-col items-start gap-4 h-full px-8 pb-8',
    actionLink: 'mt-auto w-full text-center',
    'close-nav': 'fixed top-0 left-0 bottom-0 z-20 w-1/3 bg-transparent px-4 sm:w-2/3'
  }
  return (
    <header className={Styles.nav}>
      <div className='flex items-center gap-4'>
        <Image
          src={'https://alrigh.com/wp-content/uploads/2020/06/19-tom-profile-picture.webp'}
          width='40'
          height='40'
          alt='profile pic'
          className='rounded-full'
        />
        {/* <h3>Thaha Shahzad</h3> */}
      </div>
      {!showSideNav && <div onClick={() => setshowSideNav(!showSideNav)}>{/* <FiMenu /> */} Ham</div>}
      <AnimatePresence>
        {showSideNav && (
          <>
            <motion.aside
              initial={{ x: '100%' }}
              animate={{
                x: 0
              }}
              exit={{
                x: '100%'
              }}
              transition={{ type: 'spring', bounce: 0 }}
              className={Styles.sideNav}>
              <div className={Styles.sideNavIconContainer}>
                <button className='nav-toggle-close' onClick={() => setshowSideNav(!showSideNav)}>
                  {/* <AiFillCloseSquare className={Styles.sideNavIcon} /> */}
                  close
                </button>
              </div>

              <nav className={Styles.navLinks}>
                {links.map((link, index) => (
                  <li key={index} onClick={() => setshowSideNav(!showSideNav)}>
                    <p> {link.name}</p>
                  </li>
                ))}
              </nav>
            </motion.aside>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1
              }}
              exit={{
                opacity: 0
              }}
              transition={{ type: 'spring', bounce: 0 }}
              onClick={() => {
                setshowSideNav(!showSideNav)
              }}
              className={Styles['close-nav']}
            />
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default MobileNav
