import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import './media.scss'
import clsx from "clsx";

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [openPageTitle, setOpenPageTitle] = useState('home')
  const [isMenuActive, setIsMenuActive] = useState(false)

  const isScrolled = () => {
    window.addEventListener('scroll', () => {
      window.scrollY < 20 ? setScrolled(false) : setScrolled(true)
    })
  }

  function toggleMobileMenu() {
    setIsMenuActive(!isMenuActive);
  }

  function changePage(page) {
    setOpenPageTitle(page);
    toggleMobileMenu();
  }

  const headerClasses = clsx({
    "scrolled-header": scrolled,
    "active": isMenuActive
  })

  return (
    <>
      <header onScroll={isScrolled()} className={headerClasses}>
        <div className="logo">
          <Link to={'/'} onClick={() => { setOpenPageTitle('') }}>marksem.</Link>
        </div>

        <ul className="menu-list">
          <li>
            <Link
              to={'/whymarksem'}
              onClick={() => { changePage('whymarksem') }}
              className={openPageTitle === "whymarksem" ? "active" : ""}
            >Чому MARKSEM</Link>
          </li>
          <li>
            <Link
              to={'/houses'}
              onClick={() => { changePage('houses') }}
              className={openPageTitle === "houses" ? "active" : ""}
            >Будинки</Link>
          </li>
          <li>
            <Link
              to={'/investments'}
              onClick={() => { changePage('investments') }}
              className={openPageTitle === "investments" ? "active" : ""}
            >Інвестиції</Link>
          </li>
          <li>
            <Link
              to={'/contacts'}
              onClick={() => { changePage('contacts') }}
              className={openPageTitle === "contacts" ? "active" : ""}
            >Контактна інформація</Link>
          </li>
        </ul>

        <div className="login-lang-items"></div>

        <div className="burger-menu" onClick={toggleMobileMenu}>
          <a>
            <svg width={16} height={16} fill="#fff" className="icon">
              <use href={
                isMenuActive ? "./icons-sprite.svg#close-icon-white"
                  : "./icons-sprite.svg#menu_hamburger"
                  } />
            </svg>
          </a>
        </div>


      </header>
    </>
  )
}

export default Header