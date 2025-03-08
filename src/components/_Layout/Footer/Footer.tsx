import React from 'react'
import { Info } from '../Info/Info'
import './Footer.scss'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <small>&#169;POTOLKI.SOKOL</small>
        <Info />
      </div>
    </footer>
  )
}
