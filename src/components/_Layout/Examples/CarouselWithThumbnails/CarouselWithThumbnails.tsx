import React, { useEffect, useRef, useState } from 'react'
import { Carousel, Col, Row, Image } from 'antd'
import type { CarouselRef } from 'antd/es/carousel'
import { supabase } from '../../../../services/supabase'
import './CarouselWithThumbnails.scss'

interface ImageData {
  name: string
  url: string
  type: string
}

const BUCKET_NAME = 'potolki-sokol'
const FOLDER_NAME = 'works/'

export const CarouselWithThumbnails = () => {
  const [images, setImages] = useState<ImageData[]>([])
  const [currentNum, setCurrentNum] = useState(0)
  const carouselRef = useRef<CarouselRef>(null)

  const handleThumbnailClick = (index: number) => {
    setCurrentNum(index)
    if (carouselRef.current) {
      carouselRef.current.goTo(index, false)
    }
  }

  const getExamples = async () => {
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .list(FOLDER_NAME)

    if (error) {
      console.error('Ошибка загрузки:', error)
      return
    }

    const imageArray: ImageData[] = data.map((file) => ({
      type: file.metadata.mimetype,
      name: file.name,
      url: supabase.storage
        .from(BUCKET_NAME)
        .getPublicUrl(`${FOLDER_NAME}/${file.name}`).data.publicUrl
    }))

    setImages(imageArray)
  }

  useEffect(() => {
    getExamples()
  }, [])

  return (
    <div className="wrapper">
      <Carousel
        className="carousel__wrapper"
        ref={carouselRef}
        dots={false}
        arrows
        afterChange={(current) => setCurrentNum(current)}>
        {images.map((item, index) => (
          <div key={index} className="carousel__item">
            {item.type.includes('image') ? (
              <img
                className="carousel__img"
                src={item.url}
                alt={`media-${index}`}
                loading="lazy"
                width="500px"
                height="500px"
              />
            ) : (
              <video className="carousel__img" controls>
                <source
                  src={item.url}
                  type="video/mp4"
                  width="500px"
                  height="500px"
                />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </Carousel>

      <Row className="row" justify="center" gutter={[10, 10]} wrap>
        {images.map((item, index) => (
          <Col className="row__wrapper" key={index} xs={6} md={4} lg={4} xl={4}>
            {item.type.includes('image') ? (
              <Image
                loading="lazy"
                alt="image"
                preview={false}
                src={item.url}
                className={
                  currentNum === index ? 'row__img-active row__img' : 'row__img'
                }
                onClick={() => handleThumbnailClick(index)}
              />
            ) : (
              <video
                className={
                  currentNum === index ? 'row__img-active row__img' : 'row__img'
                }
                onClick={() => handleThumbnailClick(index)}>
                <source src={item.url} type="video/mp4" />
              </video>
            )}
          </Col>
        ))}
      </Row>
    </div>
  )
}
