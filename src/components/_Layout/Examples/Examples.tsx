import React from 'react'
import { CarouselWithThumbnails } from './CarouselWithThumbnails/CarouselWithThumbnails'
import './Examples.scss'

export const Examples = ({
  galleryRef
}: {
  galleryRef: React.RefObject<HTMLDivElement>
}) => {
  return (
    <div className="examples" ref={galleryRef}>
      <div className="examples__container">
        <h2 className="examples__title">ПРИМЕРЫ РАБОТ</h2>
        <CarouselWithThumbnails />
      </div>
    </div>
  )
}
