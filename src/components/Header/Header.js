import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = (props) => {
    const [scrolled, setScrolled] = useState(false)

    const isScrolled = () => {
        window.addEventListener('scroll', () => {
          window.scrollY < 20 ? setScrolled(false) : setScrolled(true)
        })
    }

    return (
        <>
            <header onScroll={isScrolled()} className={ scrolled ? "scrolled-header" : ""}>
                <div className="logo">
                    <Link to={'/'}>marksem.</Link>
                </div>

                <ul className="menu-list">
                    <li><Link to={'/whymarksem'}>Чому MARKSEM</Link></li>
                    <li><Link to={'/houses'}>Будинки</Link></li>
                    <li><Link to={'/investments'}>Інвестиції</Link></li>
                    <li><Link to={'/contacts'}>Контактна інформація</Link></li>
                </ul>

                <div className="login-lang-items">

                </div>
            </header>
        </>
    )
}

export default Header