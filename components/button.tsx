import React from 'react'
import Link from 'next/link'

interface CommonProps {
    children: React.ReactNode
    variant: 'primary' | 'accent' | 'icon'
}

type ExternalLinkButton = {
    externalHref: string
    type?: never
    internalHref?: never
}
type InternalLinkButton = {
    internalHref: string
    externalHref?: never
    type?: never
}
type ActionButton = {
    type: 'submit' | 'reset' | 'button'
    externalHref?: never
    internalHref?: never
}

type ConditionalProps = ExternalLinkButton | ActionButton | InternalLinkButton
type ButtonProps = CommonProps & ConditionalProps

type style = {
    container: string
    text: string
}
interface buttonStyle {
    primary: style
    accent: style
    icon: style
}

const Button = ({
    children,
    externalHref,
    variant = 'primary',
    type,
    internalHref,
}: ButtonProps) => {
    const containedStyle =
        'inline-flex h-12 items-center justify-center rounded-full px-9 font-sans  no-underline drop-shadow-lg transition-all duration-200 ease-in-out hover:opacity-70 hover:'
    const style: buttonStyle = {
        primary: {
            container: `bg-red-full ${containedStyle}`,
            text: 'text-white font-bold',
        },
        accent: {
            container: `bg-white ${containedStyle}`,
            text: 'text-red font-bold',
        },
        icon: {
            container: '',
            text: 'text-white',
        },
    }

    if (externalHref)
        return (
            <a className={style[variant].container} href={'//' + externalHref}>
                <span className={style[variant].text}>{children}</span>
            </a>
        )
    if (internalHref) {
        return (
            <Link href={internalHref} className={style[variant].container}>
                <span className={style[variant].text}>{children}</span>
            </Link>
        )
    }

    return (
        <button type={type} className={style[variant].container}>
            <span className={style[variant].text}>{children}</span>
        </button>
    )
}

export default Button
