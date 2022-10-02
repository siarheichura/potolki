import React from 'react'
import './Slider.scss'
import { InputNumber, Slider as SliderAntd } from 'antd'

interface PropsI {
  name: string
  value: number
  min: number
  max: number
  onChange: (a: any) => void // fix any
}

export const Slider = ({ name, value, max, min, onChange }: PropsI) => {
  return (
    <div className='slider'>
      <div className='slider_name'>
        {name}
      </div>
      <div className='slider_form'>
        <SliderAntd
          className='slider_slider'
          min={min}
          max={max}
          onChange={onChange}
          value={typeof value === 'number' ? value : 0}
        />
        <InputNumber
          className='slider_input'
          min={min}
          max={max}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  )
}
