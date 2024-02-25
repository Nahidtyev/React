import React from 'react'
import LoginLeft from './Left'
import LoginRight from './Right'
import "./login.scss"

const Login = () => {
  return (
    <div id="login">
      <div className="container">
        <div className="row justify-content center align items-center g-0">
          <div className="col-xl-6">
              <LoginLeft/>
          </div>
          <div className="col-xl-6">
              <LoginRight/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login