import React from 'react'
import './Layout.scss'

import { Header } from './Header/Header'
import { Main } from './Main/Main'

export const Layout = () => {
  return (
    <div className='layout'>
      <Header />
      <Main />
    </div>
  )
}
