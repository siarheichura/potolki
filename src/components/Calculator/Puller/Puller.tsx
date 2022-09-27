import React from 'react'
import './Puller.scss'
import { Col, InputNumber, Row, Slider } from 'antd'

interface PropsI {
  name: string
  value: number
  min: number
  max: number
  onChange: (a: any) => void
}

export const Puller = ({ name, value, max, min, onChange }: PropsI) => {
  return (
    <div style={{width: '60%', margin: '0 auto'}}>
      <div>{name}</div>
      <Row style={{display: 'flex'}}>
        <Col style={{width: '90%'}}>
          <Slider
            min={min}
            max={max}
            onChange={onChange}
            value={typeof value === 'number' ? value : 0}
          />
        </Col>
        <Col style={{width: '10%'}}>
          <InputNumber
            min={min}
            max={max}
            value={value}
            onChange={onChange}
          />
        </Col>
      </Row>
    </div>
  )
}
