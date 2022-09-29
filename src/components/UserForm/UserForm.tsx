import React from 'react'
import './UserForm.scss'
import { Button, Input } from 'antd'
import { TextArea } from '../TextArea/TextArea'

export const UserForm = () => {
  return (
    <>
      <TextArea label='Дополнительные работы (просчитываются индивидуально):' rows={3} />

      <div className='user-form'>
        <div className='user-form_label'>
          Чтобы узнать
          <span> точную стоимость </span>
          или
          <span> получить консультацию </span>
          оставьте свои контакты и наш менеджер свяжется с Вами
        </div>

        <div className='user-form_inputs'>
          <Input placeholder='Name' />
          <Input placeholder='Tel' />
        </div>

        <Button className='user-form_button' type='primary'>
          Submit
        </Button>
      </div>
    </>

  )
}
