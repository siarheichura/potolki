import React, { useState } from 'react'
import { CloseOutlined, MenuOutlined } from '@ant-design/icons'
import { scrollToRef } from '../../../services/handleScroll'
import { SectionRefs } from '../../../_interfaces'
import { Info } from '../Info/Info'
import './Header.scss'

export const Header = ({ sectionRefs }: { sectionRefs: SectionRefs }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((prev) => !prev)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const listArray = [
    { label: 'Цены', ref: sectionRefs.calcRef },
    { label: 'Каталог', ref: sectionRefs.offerRef },
    { label: 'Галерея', ref: sectionRefs.galleryRef },
    { label: 'О нас', ref: sectionRefs.aboutRef },
    { label: 'Отзывы', ref: sectionRefs.reviewsRef }
  ]

  return (
    <header className={`header ${menuOpen ? 'open' : ''}`}>
      <div className="container">
        <div className="header-container">
          <div className="header-logo" onClick={scrollToTop} />
          <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
            <ul className="header-list">
              {listArray.map(({ label, ref }) => (
                <li key={label} className="header-list__item">
                  <button
                    className="header-list__link"
                    onClick={() => {
                      scrollToRef(ref, 0)
                      setMenuOpen(false)
                    }}
                    role="link"
                    aria-label={label}>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <Info />
          <button
            className="burger-icon"
            onClick={toggleMenu}
            aria-label="Меню">
            {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>
      </div>
    </header>
  )
}
