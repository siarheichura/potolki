import React, { forwardRef } from 'react'
import { MainForm } from '../../MainForm/MainForm'
import './Calculator.scss'

export const Calculator = forwardRef<HTMLDivElement>((_, calcRef) => {
  return (
    <div className="calc">
      <div className="calc__container container" ref={calcRef}>
        <MainForm />
      </div>
    </div>
  )
})
