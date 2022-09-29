import React, { useEffect, useState } from 'react'
import './Calculator.scss'

import { Puller } from './Puller/Puller'

interface CalculatorValueI {
  square: number
  lightPoints: number
  cornice: number
  secretCornice: number
}

export const Calculator = () => {
  const initCalculatorValue: CalculatorValueI = {
    square: 0,
    lightPoints: 0,
    cornice: 0,
    secretCornice: 0
  }

  const [calcValue, setCalcValue] = useState<CalculatorValueI>(initCalculatorValue)
  const [totalAmount, setTotalAmount] = useState<number>(0)

  const onChange = (newValue: CalculatorValueI) => {
    setCalcValue(newValue)
  }

  useEffect(() => {
    getTotalAmount()
  }, [calcValue])

  const getTotalAmount = () => {
    const { square, lightPoints, cornice, secretCornice } = calcValue
    const result = square * 9 + lightPoints * 6 + cornice * 9 + secretCornice * 17
    setTotalAmount(result)
  }

  return (
    <div className='calculator'>
      <Puller
        name='Площадь потолка, кв.м.'
        value={calcValue.square}
        min={0}
        max={250}
        onChange={(value: number) => onChange({ ...calcValue, square: value })}
      />
      <Puller
        name='Точки света, шт.'
        value={calcValue.lightPoints}
        min={0}
        max={10}
        tooltipText='Тут можно описать что такое Точки света'
        onChange={(value: number) => onChange({ ...calcValue, lightPoints: value })}
      />
      <Puller
        name='Потолочный карниз, пог.м.'
        value={calcValue.cornice}
        min={0}
        max={50}
        onChange={(value: number) => onChange({ ...calcValue, cornice: value })}
      />
      <Puller
        name='Скрытый карниз, пог.м.'
        value={calcValue.secretCornice}
        min={0}
        max={50}
        onChange={(value: number) => onChange({ ...calcValue, secretCornice: value })}
      />
      <div className='calculator_sum'>
        Приблизительная стоимость:
        <span> {totalAmount}$</span>
      </div>
    </div>
  )
}
