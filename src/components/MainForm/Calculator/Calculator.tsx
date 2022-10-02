import React from 'react'
import './Calculator.scss'

import { Slider } from './Slider/Slider'
import { TextArea } from './TextArea/TextArea'
import { CalculatorValueI } from '../MainForm'

interface PropsI {
  calculatorValue: CalculatorValueI
  setCalculatorValue: (value: CalculatorValueI) => void
  totalAmount: number
}

export const Calculator = ({ calculatorValue, setCalculatorValue, totalAmount }: PropsI) => {
  const onChange = (newValue: CalculatorValueI) => setCalculatorValue(newValue)

  return (
    <div className='calculator'>
      <div className='calculator_title'>КАЛЬКУЛЯТОР СТОИМОСТИ</div>
      <Slider
        name='Площадь потолка, кв.м.'
        value={calculatorValue.square}
        min={0}
        max={250}
        onChange={(value: number) => onChange({ ...calculatorValue, square: value })}
      />
      <Slider
        name='Точечные светильники (без учета стоимости самих светильников), шт.'
        value={calculatorValue.lightPoints}
        min={0}
        max={20}
        onChange={(value: number) => onChange({ ...calculatorValue, lightPoints: value })}
      />
      <Slider
        name='Потолочный карниз (установка с нашим карнизом), пог.м.'
        value={calculatorValue.cornice}
        min={0}
        max={50}
        onChange={(value: number) => onChange({ ...calculatorValue, cornice: value })}
      />
      <Slider
        name='Скрытый карниз (установка с нашим карнизом), пог.м.'
        value={calculatorValue.secretCornice}
        min={0}
        max={50}
        onChange={(value: number) => onChange({ ...calculatorValue, secretCornice: value })}
      />
      <TextArea
        label='Дополнительные работы (просчитываются индивидуально): дополнительное освещение зон, двухуровневый, парящие и т.д.'
        rows={3}
        onChange={(value: string) => onChange({ ...calculatorValue, additionalInfo: value })}
      />
      <div className='calculator_sum'>
        ПРИБЛИЗИТЕЛЬНАЯ СТОИМОСТЬ:
        <span> {totalAmount}$</span>
      </div>
    </div>
  )
}
