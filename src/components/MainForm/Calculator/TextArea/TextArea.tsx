import React from 'react'
import './TextArea.scss'
import { Input, Tooltip } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'

const { TextArea: TextAreaAntd } = Input

interface PropsI {
  label: string
  rows: number
  onChange: (v: string) => void
}

export const TextArea = ({ label, rows, onChange }: PropsI) => {
  return (
    <div className='text-area'>
      <div className='text-area_label'>
        {label}
        <Tooltip
          placement='right'
          title='Световые линии, подсветка, и др. (доработать)'
          overlayInnerStyle={{ fontSize: '12px' }}
        >
          <InfoCircleOutlined className='text-area_label-icon' />
        </Tooltip>
      </div>
      <TextAreaAntd
        rows={rows}
        onChange={(input) => onChange(input.target.value)}
      />
    </div>
  )
}
