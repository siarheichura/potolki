import React from 'react'
import { InstagramIcon, TelegramIcon } from '../../Icons/Icons'
import { POTOLKI_LINKS } from '../../../_constants'
import './Info.scss'

export const Info = () => {
  const { TEL, TEL_HREF } = POTOLKI_LINKS

  return (
    <div className="info">
      <a href={TEL_HREF} className="info_tel">
        {TEL}
      </a>
      <TelegramIcon className="info_icon" />
      <InstagramIcon className="info_icon" />
    </div>
  )
}
