import React from 'react'
import { Info } from '../Info/Info'
import './Header.scss'

export const Header = () => {

  return (
    <header>
      <div className="container">
        <div className="header-container">
          <div className="logo"></div>
          <Info />
        </div>
      </div>
    </header>
  )
}
