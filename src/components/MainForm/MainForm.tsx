import React, { useEffect, useState } from 'react'
import './MainForm.scss'
import { Calculator } from './Calculator/Calculator'
import { UserForm } from './UserForm/UserForm'
import { Button } from 'antd'
import { sendMessage } from '../../services/telegram'

export interface CalculatorValueI {
  square: number
  lightPoints: number
  cornice: number
  secretCornice: number
  additionalInfo: string
}

export interface UserFormValueI {
  name: string
  tel: string
}

export const MainForm = () => {
  const initCalculatorValue: CalculatorValueI = {
    square: 0,
    lightPoints: 0,
    cornice: 0,
    secretCornice: 0,
    additionalInfo: ''
  }
  const initUserFormValue: UserFormValueI = {
    name: '',
    tel: ''
  }

  const [calculatorValue, setCalculatorValue] = useState<CalculatorValueI>(initCalculatorValue)
  const [totalAmount, setTotalAmount] = useState<number>(0)
  const [userFormValue, setUserFormValue] = useState<UserFormValueI>(initUserFormValue)

  const getTotalAmount = () => {
    const { square, lightPoints, cornice, secretCornice } = calculatorValue
    const amount = square * 9 + lightPoints * 6 + cornice * 9 + secretCornice * 17
    setTotalAmount(amount)
  }

  useEffect(() => {
    getTotalAmount()
  }, [calculatorValue])

  const submitForm = async () => {
    const { name, tel } = userFormValue
    if (name && tel) {
      const result = { ...calculatorValue, ...userFormValue, totalAmount }
      await sendMessage(result)
      setCalculatorValue(initCalculatorValue)
      setUserFormValue(initUserFormValue)
      setTotalAmount(0)
    }
  }

  return (
    <div>
      <Calculator
        calculatorValue={calculatorValue}
        setCalculatorValue={setCalculatorValue}
        totalAmount={totalAmount}
      />
      <UserForm
        userFormValue={userFormValue}
        setUserFormValue={setUserFormValue}
      />
      <Button type='primary' onClick={submitForm}>
        Отправить
      </Button>
    </div>
  )
}
