import React from 'react'
import './Puller.scss'
import { InputNumber, Slider, Tooltip } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'

interface PropsI {
  name: string
  value: number
  min: number
  max: number
  tooltipText?: string
  onChange: (a: any) => void // fix any
}

export const Puller = ({ name, value, max, min, onChange, tooltipText }: PropsI) => {
  return (
    <div className='puller'>
      <div className='puller_name'>
        {name}

        {
          tooltipText &&
          <Tooltip placement='right' title={tooltipText}>
            <InfoCircleOutlined className='puller_name-icon' />
          </Tooltip>
        }
      </div>
      <div className='puller_form'>
        <Slider
          className='puller_slider'
          min={min}
          max={max}
          onChange={onChange}
          value={typeof value === 'number' ? value : 0}
        />
        <InputNumber
          className='puller_input'
          min={min}
          max={max}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  )
}
