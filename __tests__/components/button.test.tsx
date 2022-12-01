import { render, screen } from '@testing-library/react'
import Button from '../../components/button'
import '@testing-library/jest-dom/extend-expect'

describe('Button ', () => {
    it('should render a button with the class of primary', () => {
        render(
            <Button variant="primary" type="button">
                Primary
            </Button>
        )

        const colorButton = screen.getByRole('button', {
            name: /primary/i,
        })
        expect(colorButton).toHaveClass('bg-red-full')
    })

    it('should render a button with a button tag', () => {
        render(
            <Button type="button" variant="primary">
                Button
            </Button>
        )
        const buttonTag = screen.getByRole('button', { name: /button/i })

        expect(buttonTag).toHaveClass('bg-red-full')
        expect(buttonTag).toHaveAttribute('type')
    })
})

describe('Link Button', () => {
    it('should render external Link Button with an anchor Tag', () => {
        render(
            <Button variant="primary" externalHref="www.facebook.com">
                External Link
            </Button>
        )
        const LinkButton = screen.getByRole('link', { name: /external link/i })
        expect(LinkButton).toHaveClass('bg-red-full')
        expect(LinkButton).toHaveAttribute('href', '//www.facebook.com')
    })

    it('should render internal Link Button with next Link tag', () => {
        render(
            <Button variant="primary" internalHref="/">
                Internal Link
            </Button>
        )
        const InternalLinkButton = screen.getByRole('link', {
            name: /internal link/i,
        })
        expect(InternalLinkButton).toHaveAttribute('href', '/')
    })
})
