import React from 'react'
import './UserForm.scss'
import { Input } from 'antd'
import { UserFormValueI } from '../MainForm'

interface PropsI {
  userFormValue: UserFormValueI
  setUserFormValue: (value: UserFormValueI) => void
}

export const UserForm = ({ userFormValue, setUserFormValue }: PropsI) => {
  const onInputChange = (newValue: UserFormValueI) => setUserFormValue(newValue)

  return (
    <>
      <div className='user-form'>
        <div className='user-form_label'>
          Чтобы узнать
          <span> точную стоимость </span>
          или
          <span> получить консультацию </span>
          оставьте свои контакты и наш менеджер свяжется с Вами
        </div>

        <div className='user-form_inputs'>
          <Input
            placeholder='Ваше Имя'
            value={userFormValue.name}
            onChange={(value) => onInputChange({ ...userFormValue, name: value.target.value })}
          />
          <Input
            placeholder='Ваш телефон'
            value={userFormValue.tel}
            onChange={(value) => onInputChange({ ...userFormValue, tel: value.target.value })}
          />
        </div>
      </div>
    </>
  )
}
