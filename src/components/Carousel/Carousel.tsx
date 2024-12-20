import React from 'react'
import { Carousel } from 'antd'
import image1 from '../../assets/ex-1.jpg'
import image4 from '../../assets/ex-4.MOV'
import image2 from '../../assets/ex-2.jpg'
import image3 from '../../assets/ex-3.jpg'
import './Carousel.scss'

const imageArray = [image1, image2, image3, image4]

export const CarouselContainer = () => {
  return (
    <Carousel
      arrows
      infinite={true}
      autoplay
      autoplaySpeed={4000}
      className="carousel">
      {imageArray.map((item, index) =>
        index !== 3 ? (
          <div key={index}>
            <div className="carousel__wrapper">
              <img
                className="carousel__img"
                src={item}
                alt="Описание изображения"
              />
            </div>
          </div>
        ) : (
          <div key={index}>
            <div className="carousel__wrapper">
              <video className="carousel__img" controls>
                <source
                  width="100%"
                  height="100%"
                  src={item}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )
      )}
    </Carousel>
  )
}
