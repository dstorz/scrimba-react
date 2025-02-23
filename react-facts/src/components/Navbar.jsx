/**
 * Challenge: complete the Navbar to match the Figma design
 * 
 * Hints:
 * - for semantic HTML purposes, the Navbar should render
 *   a <header> with a <nav> nested inside. The image and "ReactFacts"
 *   text elements can both be rendered as children inside the <nav>
 * - reference the Figma design for the most accurate info about
 *   colors, sizes, font information, etc.
 */


export function Logo() {
    return (
        <div className="header-logo">
            <img src="react.svg" alt="React Logo" className="logo" />
            <span>ReactFacts</span>
        </div>
    )
}

export default function Navbar() {
    return (
        <header className="header">
            <nav>
                <Logo />
            </nav>
        </header>
    )
}