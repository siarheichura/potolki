import React from 'react'
import { Steps } from 'antd'
import {
  SolutionOutlined,
  UserOutlined,
  CalculatorOutlined,
  ShopOutlined,
  ToolOutlined
} from '@ant-design/icons'
import './Steps.scss'

export const StepsContainer = () => {
  return (
    <Steps className="steps" current={0} direction="horizontal">
      <Steps.Step
        className="steps__item"
        title="1. ЗАЯВКА"
        description="Позвоните или напишите нам"
        icon={<UserOutlined className="steps__icon" />}
      />
      <Steps.Step
        className="steps__item"
        title="2. ЗАМЕР"
        description="Бесплатно и в удобное для вас время"
        icon={<SolutionOutlined className="steps__icon" />}
      />
      <Steps.Step
        className="steps__item"
        title="3. РАСЧЕТ"
        description="Назовём точную стоимость"
        icon={<CalculatorOutlined className="steps__icon" />}
      />
      <Steps.Step
        className="steps__item"
        title="4. ПРОИЗВОДСТВО"
        description="От 1 дня"
        icon={<ShopOutlined className="steps__icon" />}
      />
      <Steps.Step
        className="steps__item"
        title="5. МОНТАЖ"
        description="Быстро и профессионально"
        icon={<ToolOutlined className="steps__icon" />}
      />
    </Steps>
  )
}
