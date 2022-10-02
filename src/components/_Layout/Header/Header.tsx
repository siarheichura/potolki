import React from 'react'
import './Header.scss'
import { InstagramIcon, TelegramIcon } from '../../Icons/Icons'
import { POTOLKI_LINKS } from '../../../_constants'

export const Header = () => {
  const {TEL, TEL_HREF} = POTOLKI_LINKS

  return <header>
    <div className='main-container'>
      <div className='header-container'>
        <div className='logo'></div>
        <div className='info'>
          <a href={TEL_HREF} className='info_tel'>{TEL}</a>
          <TelegramIcon className='info_icon' />
          <InstagramIcon className='info_icon' />
        </div>
      </div>
    </div>
  </header>
}
