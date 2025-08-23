import React, { useEffect, useState } from 'react'
import { Link as LinkScroll } from 'react-scroll'
import 'remixicon/fonts/remixicon.css'
import clsx from 'clsx'
import logo2 from '../assets/logo2.png'


const Navlink = ({ title }) => (
    <LinkScroll
        className='base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5'
    >
        {title}
    </LinkScroll>
)

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [hasScroll, setHasScroll] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setHasScroll(window.scrollY > 32)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

    const Navlink = ({ title }) => (
    <LinkScroll
        to={title}
        onClick={() => setIsOpen (false)}
        offset={-100}
        spy
        smooth
        className='base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5'
    >
        {title}
    </LinkScroll>
)


    return (
        <header className={clsx('fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-2' , hasScroll && 'py-2 bg-black-100 backdrop-blur-[8px]') }>
            <div className='container flex h-14 items-center max-lg:px-5'>
                <a href="" className='lg:hidden flex-1 cursor-pointer z-2'>
                    <img src={logo2} alt="logo" width={165} height={65} />
                </a>

                <div className={clsx('w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0', isOpen ? 'max-lg:opacity-100' : 'max-lg:pointer-events-none')}>
                    <div className='max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4'>
                        <nav className='max-lg:relative max-lg:z-2 max-lg:my-auto'>
                            <ul className='flex max-lg:block max-lg:px-12'>
                                <li className='nav-li'>
                                    <Navlink title='About' />
                                    <div className='dot' />
                                    <Navlink title='Characters' />
                                </li>

                                <li className='nav-logo'>
                                    <LinkScroll
                                    to='hero'
                                    offset={-200}
                                    spy 
                                    smooth
                                    className={clsx('max-lg:hidden transition-transform duration-500 cursor-pointer')}
                                    >
                                        <img src={logo2} alt="logo" width={220} height={55} />
                                    </LinkScroll>
                                </li>

                                <li className='nav-li'>
                                    <Navlink title='Gallery' />
                                    <div className='dot' />
                                    <Navlink title='Contact' />
                                </li>
                            </ul>
                        </nav>
                        <div>
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>

                <button 
                    className='lg:hidden z-2 w-10 h-10 flex justify-center items-center text-2xl' 
                    onClick={() => setIsOpen((prevState) => !prevState)}
                >
                    <i className={isOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
                </button>

            </div>
        </header>
    )
}

export default Header