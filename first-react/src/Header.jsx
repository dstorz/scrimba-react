export function Navigation() {
    return (
        <nav>
            <ul className='nav-list'>
                <li className='nav-list-item'>Pricing</li>
                <li className='nav-list-item'>About</li>
                <li className='nav-list-item'>Contact</li>
            </ul>
        </nav>
    )
}

export default function Header() {
    return (
        <header className='header'>
            <img src="react-logo.png" className='react-logo' alt="React logo" />
            <Navigation />
        </header>
    )
}