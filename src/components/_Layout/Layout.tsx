import React, { useRef } from 'react'
import { Header } from './Header/Header'
import { Main } from './Main/Main'
import { Calculator } from './Calculator/Calculator'
import { Examples } from './Examples/Examples'
import './Layout.scss'

export const Layout = () => {
  const calcRef = useRef<HTMLDivElement | null>(null)

  return (
    <div className="layout">
      <Header />
      <Main ref={calcRef} />
      <Calculator ref={calcRef} />
      <Examples />
    </div>
  )
}
