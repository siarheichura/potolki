import React, { useEffect, useState } from 'react'
import { Carousel } from 'antd'
import image1 from '../../../assets/images/review-1.avif'
import { supabase } from '../../../services/supabase'
import './Reviews.scss'

// const imageArray = [image1, image1, image1]
interface ImageData {
  name: string
  url: string
}
const BUCKET_NAME = 'potolki-sokol' // Замени на своё название бакета
const FOLDER_NAME = 'reviews/'

export const Reviews = ({
  reviewsRef
}: {
  reviewsRef: React.RefObject<HTMLDivElement>
}) => {
  const [images, setImages] = useState<ImageData[]>([])
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
            {images.map((item, index) => (
              <div key={index}>
                <div className="carousel__wrapper">
                  <img
                    className="carousel__img"
                    src={item.url}
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
