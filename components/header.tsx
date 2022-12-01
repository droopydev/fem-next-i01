import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Logo from '../public/manage_logo.svg?url'
import Button from '../components/button'

import { URLs } from '../config/url'

const { pricing, products, about, careers, community } = URLs
const listOfURL = [pricing, products, about, careers, community]

const Header = () => {
    return (
        <header>
            <Navigation />
        </header>
    )
}

export default Header

type HamburgerProps = {
    onClick: () => void
    showMenu: boolean
}

const Hamburger = ({ onClick, showMenu }: HamburgerProps) => {
    return (
        <button
            type="button"
            aria-label="Open Menu"
            className="relative z-20 h-10 w-10 bg-white text-gray focus:outline-none"
            onClick={onClick}
        >
            <span className="sr-only">Open main menu</span>

            <div className="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                    aria-hidden="true"
                    className={`absolute block h-0.5 w-5 ${
                        showMenu ? 'rotate-45' : '-translate-y-1.5'
                    } transform bg-red-full transition duration-500 ease-in-out`}
                ></span>
                <span
                    aria-hidden="true"
                    className={`absolute block h-0.5 w-5 transform bg-red-full transition duration-500 ease-in-out ${
                        showMenu ? 'opacity-0' : ''
                    }`}
                ></span>
                <span
                    aria-hidden="true"
                    className={`absolute block  h-0.5 w-5 ${
                        showMenu ? '-rotate-45' : 'translate-y-1.5'
                    } transform  bg-red-full transition duration-500  ease-in-out`}
                ></span>
            </div>
        </button>
    )
}

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false)

    const { events } = useRouter()

    const toggleMenu = useCallback(() => {
        showMenu ? setShowMenu(false) : setShowMenu(true)
        !showMenu
            ? document.querySelector('body')?.classList.add('pause-scroll')
            : document.querySelector('body')?.classList.remove('pause-scroll')
    }, [showMenu])

    const closeMenu = useCallback(() => {
        if (showMenu) {
            setShowMenu(false)
            document.querySelector('body')?.classList.remove('pause-scroll')
        }
    }, [showMenu])

    useEffect(() => {
        // subscribe to next/router event
        events.on('routeChangeStart', closeMenu)
        return () => {
            // unsubscribe to event on unmount to prevent memory leak
            events.off('routeChangeStart', closeMenu)
        }
    }, [closeMenu, events])

    const navStyle = showMenu
        ? 'fixed z-10 h-full w-full bg-red-full [&>div]:pr-[15px] lg:static lg:z-0 lg:bg-transparent'
        : ''

    const ulContainerStyle = showMenu
        ? 'absolute top-0 right-0 left-0 bottom-0 lg:static'
        : ''

    const ulStyle = showMenu
        ? 'flex flex-col gap-y-8 h-full w-full justify-center items-center lg:flex-row lg:gap-10'
        : 'hidden list-none items-center justify-center gap-10 lg:flex'

    const liStyle = showMenu
        ? 'text-2xl font-medium text-white lg:text-lg lg:text-black'
        : 'text-lg  text-black font-medium hover:opacity-50 hover:text-black'

    return (
        <nav className={navStyle} aria-label="main">
            <div className="mx-auto flex w-11/12 max-w-screen-xl items-center justify-between py-8 md:w-10/12">
                <div>
                    <Image
                        src={Logo}
                        className="w-full"
                        width={100}
                        height={100}
                        alt="Manage Logo"
                    ></Image>
                </div>
                <div className={ulContainerStyle}>
                    <ul className={ulStyle}>
                        {listOfURL.map((list) => (
                            <li key={list.name}>
                                <Link href={list.url} className={liStyle}>
                                    {list.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden lg:inline-block">
                    <Button variant="primary" internalHref="/">
                        Get Started
                    </Button>
                </div>
                <div className="inline-block lg:hidden">
                    <Hamburger onClick={toggleMenu} showMenu={showMenu} />
                </div>
            </div>
        </nav>
    )
}
