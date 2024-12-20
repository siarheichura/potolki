import React from 'react'
import { CarouselContainer } from '../../Carousel/Carousel'
import { Info } from '../Info/Info'
import './Examples.scss'

export const Examples = () => {
  return (
    <div className="examples">
      <div className="examples__container container">
        <div className="examples__title">ПРИМЕРЫ РАБОТ</div>
        <CarouselContainer />
      </div>
      <Info />
    </div>
  )
}
