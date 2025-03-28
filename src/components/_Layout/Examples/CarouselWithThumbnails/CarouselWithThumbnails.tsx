import React, { useEffect, useRef, useState } from 'react'
import { Carousel, Col, Row, Image } from 'antd'
import type { CarouselRef } from 'antd/es/carousel'
// import image1 from '../../../../assets/images/ex-1.avif'
// import video1 from '../../../../assets/videos/ex-4.MOV'
// import image2 from '../../../../assets/images/ex-2.avif'
// import image3 from '../../../../assets/images/ex-3.avif'
import { supabase } from '../../../../services/supabase'
import './CarouselWithThumbnails.scss'

// const mediaArray = [
//   { type: 'image', src: image1 },
//   { type: 'image', src: image2 },
//   { type: 'image', src: image3 },
//   { type: 'video', src: video1 },
//   { type: 'image', src: image2 },
//   { type: 'image', src: image3 }
// ]

interface ImageData {
  name: string
  url: string
}

const BUCKET_NAME = 'potolki-sokol' // Замени на своё название бакета
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
            {/* {item.type === 'image' ? ( */}
            <img
              className="carousel__img"
              src={item.url}
              alt={`media-${index}`}
              loading='lazy'
            />
            {/* ) : (
              <video className="carousel__img" controls>
                <source
                  src={item.src}
                  type="video/mp4"
                  width={100}
                  height={100}
                />
                Your browser does not support the video tag.
              </video>
            )} */}
          </div>
        ))}
      </Carousel>

      <Row className="row" justify="center" gutter={[10, 10]} wrap>
        {images.map((item, index) => (
          <Col
            className="row__wrapper"
            key={index}
            xs={8}
            sm={6}
            md={4}
            lg={4}
            xl={4}>
            {/* {item.type === 'image' ? ( */}
            <Image
              alt="image"
              height={65}
              preview={false}
              src={item.url}
              width={65}
              className={
                currentNum === index ? 'row__img-active row__img' : 'row__img'
              }
              onClick={() => handleThumbnailClick(index)}
            />
            {/* ) : (
              <video
                height={65}
                width="100%"
                className={
                  currentNum === index ? 'row__img-active row__img' : 'row__img'
                }
                onClick={() => handleThumbnailClick(index)}>
                <source src={item.src} type="video/mp4" />
              </video>
            )} */}
          </Col>
        ))}
      </Row>
    </div>
  )
}
