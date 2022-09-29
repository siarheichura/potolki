import React from 'react'
import './UserForm.scss'
import { Button, Input } from 'antd'

export const UserForm = () => {
  return (
    <div className='user-form'>
      <div className='user-form_label'>
        Чтобы узнать
        <span> точную цену </span>
        или
        <span> получить консультацию </span>
        оставьте свои контакты и мы перезвоним Вам в течение
        <span> 10 минут</span>
      </div>

      <div className='user-form_inputs'>
        <Input placeholder='Name' />
        <Input placeholder='Tel' />
      </div>

      <Button className='user-form_button' type='primary'>
        Submit
      </Button>
    </div>
  )
}
