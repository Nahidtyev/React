import {RouterProvider} from "react-router-dom"
import { routers } from '../router'
import React from "react";
import "./styles/global.scss"


const App = () => {
  return (
    // <div className={theme}>
    <>
      <RouterProvider router={routers} />
    </>
    // </div>
  )
}

export default App