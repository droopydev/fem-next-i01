import iconFacebook from '../public/icons/icon-facebook.svg'
import iconInstagram from '../public/icons/icon-instagram.svg'
import iconPinterest from '../public/icons/icon-pinterest.svg'
import iconTwitter from '../public/icons/icon-twitter.svg'
import iconYoutube from '../public/icons/icon-youtube.svg'

export const URLs = {
    home: {
        name: 'Home',
        url: '/',
    },
    pricing: {
        name: 'Pricing',
        url: '/',
    },
    products: {
        name: 'Products',
        url: '/',
    },
    about: {
        name: 'About Us',
        url: '/',
    },
    careers: {
        name: 'Careers',
        url: '/',
    },
    community: {
        name: 'Community',
        url: '/',
    },
    privacy: {
        name: 'Privacy Policy',
        url: '/',
    },
}

interface SocialMediaConfig {
    name: string
    icon: any
    url: string
}

export const SocialMedia: SocialMediaConfig[] = [
    { name: 'Facebook', icon: iconFacebook, url: '/' },
    { name: 'Youtube', icon: iconYoutube, url: '/' },
    { name: 'Twitter', icon: iconTwitter, url: '/' },
    { name: 'Pinterest', icon: iconPinterest, url: '/' },
    { name: 'Instagram', icon: iconInstagram, url: '/' },
]
