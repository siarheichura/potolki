import React from 'react'
import { scrollToRef } from '../../../services/handleScroll'
import './Main.scss'

export const Main = ({
  calcRef
}: {
  calcRef: React.RefObject<HTMLDivElement>
}) => {
  return (
    <main className="main">
      <div className="main__container container">
        <h1 className="main__logo">
          Натяжные потолки в Минске и Минской области под ключ
        </h1>
        <p className="main__desc">
          Мы предоставляем полный набор услуг по установке натяжных потолков,
          создавая современные и стильные решения для интерьеров различной
          сложности. Наша команда экспертов обеспечивает высочайшее качество
          работ, внимание к деталям и индивидуальный подход к каждому проекту.
        </p>
        <button
          className="main__button"
          onClick={() => scrollToRef(calcRef, 0)}>
          Рассчитать стоимость
        </button>
      </div>
    </main>
  )
}
