import React, { forwardRef } from 'react'
import './Main.scss'

export const Main = forwardRef<HTMLDivElement>((_, calcRef) => {
  const handleScroll = () => {
    if (calcRef && 'current' in calcRef && calcRef.current) {
      const offset = 65
      const topPosition =
        calcRef.current.getBoundingClientRect().top + window.scrollY - offset

      window.scrollTo({ top: topPosition, behavior: 'smooth' })
    }
  }

  return (
    <main className="main">
      <div className="main__container container">
        <h1 className="main__logo">
          Натяжные потолки в Минске и Минской области под ключ
        </h1>
        <button className="main__button" onClick={handleScroll}>
          Рассчитать стоимость
        </button>
      </div>
    </main>
  )
})
