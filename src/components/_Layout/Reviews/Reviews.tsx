import React from 'react'
import { Carousel } from 'antd'
import image1 from '../../../assets/images/review-1.avif'
import './Reviews.scss'

const imageArray = [image1, image1, image1]

export const Reviews = ({
  reviewsRef
}: {
  reviewsRef: React.RefObject<HTMLDivElement>
}) => {
  return (
    <div className="reviews" ref={reviewsRef}>
      <div className="container">
        <div className="reviews__container">
          <h2 className="reviews__title">ОТЗЫВЫ НАШИХ КЛИЕНТОВ</h2>
          <Carousel
            dots={false}
            arrows
            infinite={false}
            autoplay
            autoplaySpeed={4000}
            className="carousel">
            {imageArray.map((item, index) => (
              <div key={index}>
                <div className="carousel__wrapper">
                  <img
                    className="carousel__img"
                    src={item}
                    alt="Описание изображения"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}
