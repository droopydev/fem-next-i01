import React from 'react'

interface iconProps {
    icon: any
}

const Icon = ({ icon }: iconProps) => {
    const IconSvg = () => {
        return icon()
    }
    return (
        <>
            <IconSvg />
        </>
    )
}

export default Icon
