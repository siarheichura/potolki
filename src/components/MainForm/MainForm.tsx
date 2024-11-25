import React, { useEffect, useState } from 'react'
import './MainForm.scss'
import { Calculator } from './Calculator/Calculator'
import { UserForm } from './UserForm/UserForm'
import { sendMessage } from '../../services/telegram'
import { Button } from 'antd'

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

export interface UserFormErrorsI {
  name: string
  tel: string
  data: string
}

export const userFormErrors: UserFormErrorsI = {
  name: 'Пожалуйста, введите имя',
  tel: 'Пожалуйста, введите корректный номер',
  data: 'Пожалуйста, введите данные',
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

  const [calculatorValue, setCalculatorValue] =
    useState<CalculatorValueI>(initCalculatorValue)
  const [totalAmount, setTotalAmount] = useState<number>(0)
  const [userFormValue, setUserFormValue] =
    useState<UserFormValueI>(initUserFormValue)
  const [error, setError] = useState<string>('')

  const getTotalAmount = () => {
    const { square, lightPoints, cornice, secretCornice } = calculatorValue
    const amount =
      square * 9 + lightPoints * 6 + cornice * 9 + secretCornice * 17
    setTotalAmount(amount)
  }

  useEffect(() => {
    getTotalAmount()
    // eslint-disable-next-line
  }, [calculatorValue])

  const submitForm = async () => {
    const { name, tel } = userFormValue
    if (name && tel) {
      if (tel.includes('_')) {
        setError(userFormErrors.tel)
      } else {
        const result = { ...calculatorValue, ...userFormValue, totalAmount }
        await sendMessage(result)
        setCalculatorValue(initCalculatorValue)
        setUserFormValue(initUserFormValue)
        setTotalAmount(0)
        setError('')
      }
    } else if (name && !tel) {
      setError(userFormErrors.tel)
    } else if (!name && tel) {
      setError(userFormErrors.name)
    } else {
      setError(userFormErrors.data)
    }
  }

  return (
    <div className="main-form">
      <Calculator
        calculatorValue={calculatorValue}
        setCalculatorValue={setCalculatorValue}
        totalAmount={totalAmount}
      />
      <UserForm
        userFormValue={userFormValue}
        setUserFormValue={setUserFormValue}
        error={error}
      />
      {error.length > 0 && (
        <div style={{ color: 'red', display: "flex", justifyContent: 'center' }}>
          {error}
        </div>
      )}
      <Button type="primary" onClick={submitForm}>
        Отправить
      </Button>
    </div>
  )
}
