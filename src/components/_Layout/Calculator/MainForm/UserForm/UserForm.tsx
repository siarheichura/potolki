import React from 'react'
import InputMask from 'react-input-mask'
import { Input } from 'antd'
import { UserFormValueI, userFormErrors } from '../MainForm'
import './UserForm.scss'

interface PropsI {
  userFormValue: UserFormValueI
  setUserFormValue: (value: UserFormValueI) => void
  error: string
}

export const UserForm = ({
  userFormValue,
  setUserFormValue,
  error
}: PropsI) => {
  const onInputChange = (newValue: UserFormValueI) => setUserFormValue(newValue)

  return (
    <>
      <div className="user-form">
        <div className="user-form_label">
          Чтобы узнать
          <span> точную стоимость </span>
          или
          <span> получить консультацию </span>
          оставьте свои контакты и наш менеджер свяжется с Вами
        </div>

        <div className="user-form_inputs">
          <Input
            placeholder="Ваше Имя"
            value={userFormValue.name}
            onChange={(value) =>
              onInputChange({ ...userFormValue, name: value.target.value })
            }
            status={
              error.length > 0 && error === userFormErrors.name ? 'error' : ''
            }
          />
          <InputMask
            mask="+375 (99) 999 99 99"
            placeholder="Ваш телефон"
            value={userFormValue.tel}
            onChange={(value) => {
              onInputChange({ ...userFormValue, tel: value.target.value })
            }}>
            {(inputProps) => (
              <Input
                {...inputProps}
                // error={true}
                status={
                  error.length > 0 && error === userFormErrors.tel
                    ? 'error'
                    : ''
                }
              />
            )}
          </InputMask>
        </div>
      </div>
    </>
  )
}
