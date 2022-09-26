import React from 'react'
import './Header.scss'
import { InstagramIcon, TelegramIcon } from '../../Icons/Icons'
import { PhoneOutlined } from '@ant-design/icons'

export const Header = () => {
  return <header>
    <div className='logo'></div>
    <div className='info'>
      <div className='info_icons'>
        <TelegramIcon className='info_icon' />
        <InstagramIcon className='info_icon' />
      </div>
      <div>
        <PhoneOutlined style={{ transform: 'rotateY(180deg)' }} />
        +375(44)000-00-00
      </div>
    </div>
  </header>
}
