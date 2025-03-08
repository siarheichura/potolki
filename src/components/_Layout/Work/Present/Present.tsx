import React from 'react'
import { Button } from 'antd'
import { GiftOutlined } from '@ant-design/icons'
import { scrollToRef } from '../../../../services/handleScroll'
import './Present.scss'

export const Present = ({
  calcRef
}: {
  calcRef: React.RefObject<HTMLDivElement>
}) => {
  return (
    <div className="present">
      <h3 className="present__title">СВЕТИЛЬНИКИ В ПОДАРОК!</h3>
      <GiftOutlined className="present__img" />
      <div className="present__desc">
        Светильники в подарок к основному заказу. <br />
        Только сегодня!
      </div>
      <Button
        type="primary"
        className="present__button"
        onClick={() => scrollToRef(calcRef, 0)}>
        Заказать замер
      </Button>
    </div>
  )
}
