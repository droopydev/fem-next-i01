import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { Be_Vietnam_Pro } from '@next/font/google'

const vietnamFont = Be_Vietnam_Pro({
    weight: ['400', '500', '700'],
    variable: '--font-viet-sans',
    subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={`${vietnamFont.variable} max-w-none font-sans`}>
            <Component {...pageProps} />
        </div>
    )
}
