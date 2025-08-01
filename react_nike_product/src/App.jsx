import React from 'react'
import Layout from './features/Layout'
import Product from './component/Product'
import "./styles/global.scss"

const App = () => {
  return (
    <>
      <Layout>
        <Product/>
      </Layout>
    </>
  )
  
}

export default App
