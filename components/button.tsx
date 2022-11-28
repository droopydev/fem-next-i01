import React from 'react'

interface ButtonProps {
    children?: React.ReactNode
    url?: string
    color: 'primary' | 'accent'
    type?: 'submit' | 'reset' | 'button'
}

const Button: React.FC<ButtonProps> = ({ children, url, color, type }) => {
    let buttonColor, textColor, buttonColorHover
    if (color === 'primary') {
        buttonColor = 'bg-red-full'
        textColor = 'text-white'
    } else {
        buttonColor = 'bg-white'
        textColor = 'text-red'
    }

    const styleContainer = `inline-flex h-12 items-center justify-center rounded-full ${buttonColor} px-9 font-sans  no-underline drop-shadow-lg transition-all duration-200 ease-in-out hover:opacity-70 hover: `
    const styleLabel = `${textColor} font-bold`
    if (url)
        return (
            <a className={styleContainer} href={url}>
                <span className={styleLabel}>{children}</span>
            </a>
        )
    return (
        <button type={type} className={styleContainer}>
            <span className={styleLabel}>{children}</span>
        </button>
    )
}

export default Button
