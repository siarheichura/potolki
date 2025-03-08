import React from 'react'
import { MainForm } from './MainForm/MainForm'
import './Calculator.scss'

export const Calculator = ({
  calcRef
}: {
  calcRef: React.RefObject<HTMLDivElement>
}) => {
  return (
    <div className="calc" ref={calcRef}>
      <div className="calc__container container" id="calc">
        <MainForm />
      </div>
    </div>
  )
}
