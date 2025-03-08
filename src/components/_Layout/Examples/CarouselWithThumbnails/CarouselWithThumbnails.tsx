import React, { useRef, useState } from 'react'
import { Carousel, Col, Row, Image } from 'antd'
import type { CarouselRef } from 'antd/es/carousel'
import image1 from '../../../../assets/images/ex-1.avif'
import video1 from '../../../../assets/videos/ex-4.MOV'
import image2 from '../../../../assets/images/ex-2.avif'
import image3 from '../../../../assets/images/ex-3.avif'
import './CarouselWithThumbnails.scss'

const mediaArray = [
  { type: 'image', src: image1 },
  { type: 'image', src: image2 },
  { type: 'image', src: image3 },
  { type: 'video', src: video1 },
  { type: 'image', src: image2 },
  { type: 'image', src: image3 }
]

export const CarouselWithThumbnails = () => {
  const [currentNum, setCurrentNum] = useState(0)
  const carouselRef = useRef<CarouselRef>(null)

  const handleThumbnailClick = (index: number) => {
    setCurrentNum(index)
    if (carouselRef.current) {
      carouselRef.current.goTo(index, false)
    }
  }

  return (
    <div className="wrapper">
      <Carousel
        className="carousel__wrapper"
        ref={carouselRef}
        dots={false}
        arrows
        afterChange={(current) => setCurrentNum(current)}>
        {mediaArray.map((item, index) => (
          <div key={index} className="carousel__item">
            {item.type === 'image' ? (
              <img
                className="carousel__img"
                src={item.src}
                alt={`media-${index}`}
              />
            ) : (
              <video className="carousel__img" controls>
                <source
                  src={item.src}
                  type="video/mp4"
                  width={100}
                  height={100}
                />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </Carousel>

      <Row className="row" justify="center" gutter={[10, 10]} wrap>
        {mediaArray.map((item, index) => (
          <Col
            className="row__wrapper"
            key={index}
            xs={8}
            sm={6}
            md={4}
            lg={4}
            xl={4}>
            {item.type === 'image' ? (
              <Image
                alt='image'
                height={65}
                preview={false}
                src={item.src}
                width="100%"
                className={
                  currentNum === index ? 'row__img-active row__img' : 'row__img'
                }
                onClick={() => handleThumbnailClick(index)}
              />
            ) : (
              <video
                height={65}
                width="100%"
                className={
                  currentNum === index ? 'row__img-active row__img' : 'row__img'
                }
                onClick={() => handleThumbnailClick(index)}>
                <source src={item.src} type="video/mp4" />
              </video>
            )}
          </Col>
        ))}
      </Row>
    </div>
  )
}
