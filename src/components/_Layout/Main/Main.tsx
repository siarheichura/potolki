import React from 'react'
import './Main.scss'

import { Calculator } from '../../Calculator/Calculator'
import { UserForm } from '../../UserForm/UserForm'

export const Main = () => {
  return <main>
    <div className='main-container'>
      <div style={{ textAlign: 'center', fontWeight: 900 }}>ЗДЕСЬ БУДЕТ КАКОЕ-ТО МИНИМАЛЬНОЕ ОПИСАНИЕ</div>
      <Calculator />
      <UserForm />
      <div style={{ textAlign: 'center', fontWeight: 900 }}>
        ЗДЕСЬ ТОЖЕ ЧТО-ТО БУДЕТ (ТИПА ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ, ОТЗЫВЫ ИЛИ ЕЩЕ ЧЕ)
      </div>
    </div>
  </main>
}
