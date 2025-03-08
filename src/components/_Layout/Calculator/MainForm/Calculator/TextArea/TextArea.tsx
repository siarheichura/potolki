import React from 'react'
import { Input } from 'antd'
import './TextArea.scss'

const { TextArea: TextAreaAntd } = Input

interface PropsI {
  label: string
  rows: number
  onChange: (v: string) => void
}

export const TextArea = ({ label, rows, onChange }: PropsI) => {
  return (
    <div className="text-area">
      <label className="text-area_label">{label}</label>
      <TextAreaAntd
        rows={rows}
        onChange={(input) => onChange(input.target.value)}
      />
    </div>
  )
}
