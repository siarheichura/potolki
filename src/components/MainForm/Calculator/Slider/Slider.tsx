import React from 'react'
import './Slider.scss'
import { InputNumber, Tooltip, Slider as SliderAntd } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'

interface PropsI {
  name: string
  value: number
  min: number
  max: number
  tooltipText?: string
  onChange: (a: any) => void // fix any
}

export const Slider = ({ name, value, max, min, onChange, tooltipText }: PropsI) => {
  return (
    <div className='slider'>
      <div className='slider_name'>
        {name}

        {
          tooltipText &&
          <Tooltip
            placement='right'
            title={tooltipText}
            overlayInnerStyle={{fontSize: '12px'}}
          >
            <InfoCircleOutlined className='slider_name-icon' />
          </Tooltip>
        }
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
