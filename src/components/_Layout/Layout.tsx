import React from 'react'
import './Layout.scss'
import { Header } from './Header/Header'
import { Main } from './Main/Main'
import { Footer } from './Footer/Footer'

export const Layout = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
