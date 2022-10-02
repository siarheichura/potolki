import React from 'react'
import './Footer.scss'
import { SERIYVOLK_TG_LINK } from '../../../_constants'

export const Footer = () => {
  return <footer>
    designed & built by
    <a
      href={SERIYVOLK_TG_LINK}
      target="_blank"
      rel="noopener noreferrer"
    >
      seriyvolk
    </a>
    🐺
  </footer>
}
