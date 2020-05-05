import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import './media.scss'
import WhyMarksem from '../../pages/WhyMarksem'

const Header = () => {
    const [scrolled, setScrolled] = useState(false)
    const [openPageTitle, setOpenPageTitle] = useState('home')
  
    const changePage = (pageName) => {
      setOpenPageTitle(pageName)
    }

    const isScrolled = () => {
        window.addEventListener('scroll', () => {
          window.scrollY < 20 ? setScrolled(false) : setScrolled(true)
        })
    }

    return (
        <>
            <header onScroll={isScrolled()} className={ scrolled ? "scrolled-header" : ""}>
                <div className="logo">
                    <Link to={'/'} onClick={ ()=>{setOpenPageTitle('')} }>marksem.</Link>
                </div>

                <ul className="menu-list">
                    <li><Link to={'/whymarksem'} onClick={()=>{setOpenPageTitle('whymarksem')}} className={openPageTitle==="whymarksem" ? "active" : ""}>Чому MARKSEM</Link></li>
                    <li><Link to={'/houses'} onClick={()=>{setOpenPageTitle('houses')}} className={openPageTitle==="houses" ? "active" : ""}>Будинки</Link></li>
                    <li><Link to={'/investments'} onClick={ ()=> {setOpenPageTitle('investments')}} className={openPageTitle==="investments" ? "active" : ""}>Інвестиції</Link></li>
                    <li><Link to={'/contacts'} onClick={ () => {setOpenPageTitle('contacts')}} className={openPageTitle==="contacts" ? "active" : ""}>Контактна інформація</Link></li>
                </ul>

                <div className="login-lang-items">

                </div>

                <div className="burger-menu">
                    <a href="#">
                        <svg width={16} height={16} fill="#fff" className="icon">
                            <use href="./icons-sprite.svg#menu_hamburger" />
                        </svg>
                    </a>
                </div>
            </header>
        </>
    )
}

export default Header