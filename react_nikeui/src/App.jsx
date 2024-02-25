import React from 'react'
import "./style/global.scss"
import Layout from './features/Layout'
import Home from "./component/Home"
import BestOf from "./component/BestOf"
import Featured from "./component/Featured"
import GearUp from "./component/GearUp"
import DontMiss from "./component/DontMiss"
import Essentials from "./component/Essentials"

function App() {
  return (
    <Layout>
      <Home />
      <BestOf />
      <Featured/>
      <GearUp/>
      <DontMiss/>
      <Essentials/>    
    </Layout>
  )
}

export default App