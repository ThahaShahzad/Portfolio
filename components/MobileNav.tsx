import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu } from 'react-icons/fi'
import Image from 'next/image'
import { useState } from 'react'
import useScrollPosition from './hooks/useScrollPos'
import { AiFillCloseSquare } from 'react-icons/ai'

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
  const Styles = {
    nav: `flex lg:hidden justify-between items-center bg-bg p-6 z-10 fixed top-0 inset-x-0 ${
      scrollPosition !== 0 && 'border-b-2 border-bg-light'
    }`,
    sideNav: 'navShadow h-full w-2/3 fixed top-0 right-0 bg-primary py-8 px-4 rounded-l-2xl sm:w-1/3',
    sideNavIconContainer: 'flex justify-end',
    sideNavIcon: 'w-8 h-8',
    logo: 'flex items-center ml-3',
    logoText: 'ml-3 text-normal',
    navLinks: 'flex flex-col items-start gap-4 h-full px-8 pb-8',
    actionLink: 'mt-auto w-full text-center',
    'close-nav': 'fixed top-0 left-0 bottom-0 w-1/3 bg-transparent px-4 sm:w-2/3'
  }
  return (
    <header className={Styles.nav}>
      <div className='flex items-center gap-4'>
        {/* <Image
          src={'https://alrigh.com/wp-content/uploads/2020/06/19-tom-profile-picture.webp'}
          width='40'
          height='40'
          alt='profile pic'
          className='rounded-full'
        /> */}
        {/* <h3>Thaha Shahzad</h3> */}
      </div>
      {!showSideNav && (
        <div onClick={() => setshowSideNav(!showSideNav)}>
          <FiMenu />
        </div>
      )}
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
                  <AiFillCloseSquare className={Styles.sideNavIcon} />
                </button>
              </div>

              <nav className={`${Styles.navLinks} list-none`}>
                {links.map((link, index) => (
                  <a
                    href={`${link.name === 'Resume' ? 'resume' : `#${link.name}`}`}
                    key={index}
                    onClick={() => setshowSideNav(!showSideNav)}>
                    <p> {link.name}</p>
                  </a>
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
