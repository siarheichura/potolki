import React from 'react'
import { Layout } from './components/_Layout/Layout'
import '../src/style/custom-antd.css'

export const App = () => {
  return (
    <>
      <React.StrictMode>
        <Layout />
      </React.StrictMode>
    </>
  )
}
