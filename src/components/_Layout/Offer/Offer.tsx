import React from 'react'
import { Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { scrollToRef } from '../../../services/handleScroll'
import { SectionRefs } from '../../../_interfaces'
import image1 from '../../../assets/images/offer-1.avif'
import image2 from '../../../assets/images/offer-2.avif'
import './Offer.scss'

const imageArray = [
  { image: image1, name: 'МНОГОУРОВНЕВЫЕ ПОТОЛКИ' },
  { image: image2, name: 'МАТОВЫЕ ПОТОЛКИ' },
  { image: image1, name: 'ТРЕКОВЫЕ СИСТЕМЫ ' },
  { image: image2, name: 'ПАРЯЩИЕ ПОТОЛКИ' }
]

export const Offer = ({ sectionRefs }: { sectionRefs: SectionRefs }) => {
  const responsiveSettings = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        arrows: true,
        dots: true
      }
    }
  ]

  return (
    <div className="offer" ref={sectionRefs.offerRef}>
      <div className="container">
        <div className="offer__container">
          <h2 className="offer__title">МЫ ПРЕДЛАГАЕМ</h2>
          <Carousel
            responsive={responsiveSettings}
            slidesToShow={3}
            dots={false}
            arrows
            prevArrow={
              <LeftOutlined
                color="red"
                className="carousel__arrow left-arrow"
              />
            }
            nextArrow={
              <RightOutlined className="carousel__arrow right-arrow" />
            }
            infinite={true}
            className="carousel">
            {imageArray.map((item, index) => (
              <div key={index}>
                <div className="carousel__wrapper">
                  <img
                    className="carousel__img"
                    src={item.image}
                    alt="Описание изображения"
                    loading="lazy"
                  />
                  <h3 className="carousel__title">{item.name}</h3>
                  <button
                    className="carousel__btn"
                    onClick={() => scrollToRef(sectionRefs.calcRef)}>
                    Расчет стоимости
                  </button>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}
