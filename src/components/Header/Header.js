import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = (props) => {
    const {scrolled} = props
    return (
        <>
            <header className={ scrolled ? "scrolled-header" : ""}>
                <div className="logo">
                    <Link to={'/'}>marksem.</Link>
                </div>

                <ul className="menu-list">
                    <li><Link to={'/whymarksem'}>why marksem</Link></li>
                    <li><Link to={'/houses'}>houses</Link></li>
                    <li><Link to={'/investments'}>investments</Link></li>
                    <li><Link to={'/contacts'}>contacts</Link></li>
                </ul>

                <div className="login-lang-items">

                </div>
            </header>
        </>
    )
}

export default Header