import React from 'react'
import './TextArea.scss'
import { Input } from 'antd'

const { TextArea: TextAreaAntd } = Input

interface PropsI {
  label: string
  rows: number
}

export const TextArea = ({ label, rows }: PropsI) => {
  return (
    <div>
      <div>{label}</div>
      <TextAreaAntd rows={rows} />
    </div>
  )
}
