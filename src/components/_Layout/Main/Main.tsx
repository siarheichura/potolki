import React from 'react'
import './Main.scss'

import { Calculator } from '../../Calculator/Calculator'
import { TextArea } from '../../TextArea/TextArea'
import { UserForm } from '../../UserForm/UserForm'

export const Main = () => {
  return <main>
    <div className='main-container'>
      <Calculator />
      <TextArea label='Дополнительныеeee работы (просчитываются индивидуально):' rows={3} />
      <UserForm />
    </div>
  </main>
}
