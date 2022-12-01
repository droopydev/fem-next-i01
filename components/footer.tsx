import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Logo from '../public/manage_logo_white.svg?url'
import Button from './button'
import Icon from './icon'
import { URLs, SocialMedia } from '../config/url'

const Footer = () => {
    return (
        <footer className="bg-dark-blue ">
            <div className="mx-auto w-11/12 max-w-screen-xl pt-16  pb-8 lg:inline-block lg:grid lg:w-10/12 lg:grid-cols-[auto,2fr,3fr] lg:grid-rows-[auto,auto] lg:gap-x-16 lg:gap-y-8">
                <SectionNewsletter />
                <SectionNavigation />
                <SectionSocialMedia />
                <div className="mb-8 flex justify-center lg:col-start-1 lg:row-start-1 lg:mb-0 lg:inline-block ">
                    <Image
                        src={Logo}
                        width={100}
                        height={100}
                        className=" w-40"
                        alt="Manage Brand Logo"
                    ></Image>
                </div>
                <p className="row-start-2 text-center text-gray lg:col-start-3">
                    Copyright 2020. All Rights Reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer

const SectionNavigation = () => {
    const { home, pricing, products, about, careers, community, privacy } = URLs
    const listOfUrl = [
        home,
        pricing,
        products,
        about,
        careers,
        community,
        privacy,
    ]
    return (
        <nav aria-label="Footer">
            <ul className="mx-auto mb-12 grid w-4/5 grid-flow-col grid-cols-2 grid-rows-4 gap-x-12 gap-y-4 text-center lg:mb-0 lg:w-full lg:text-left">
                {listOfUrl.map((list) => {
                    return (
                        <li key={list.name}>
                            <Link
                                href={list.url}
                                className="text-white transition-all hover:text-red md:text-center lg:text-left"
                            >
                                {list.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

const SectionSocialMedia = () => {
    return (
        <section className="mb-12 lg:mb-0">
            <ul className="flex cursor-pointer justify-center gap-8  lg:justify-start lg:gap-8">
                {SocialMedia.map((media) => {
                    return (
                        <li key={media.icon}>
                            <Button variant="icon" externalHref={media.url}>
                                <div className="w-8 text-white transition-all duration-200 hover:text-red ">
                                    <Icon icon={media.icon} />
                                </div>
                                <span className="sr-only">{media.name}</span>
                            </Button>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

const SectionNewsletter = () => {
    return (
        <section className="mb-20 lg:col-start-3 lg:row-start-1 lg:mb-0">
            <form className="mx-auto flex max-w-xl flex-row gap-x-4">
                <label htmlFor="newsletter" className="sr-only">
                    Enter email to sign up for newsletter
                </label>
                <input
                    type="email"
                    id="newsletter"
                    name="newsletter"
                    placeholder="Updates in your inbox..."
                    className="h-12 w-full rounded-full px-8"
                />
                <Button variant="primary" type="submit">
                    Go
                </Button>
            </form>
        </section>
    )
}
