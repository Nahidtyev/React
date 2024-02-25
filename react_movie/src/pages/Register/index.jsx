import React from 'react'
import RegisterRight from './Right'
import RegisterLeft from './Left'

const Register = () => {
  return (
    <div id="register">
      <div className="container">
        <div className="row justify-content center align items-center g-0">
          <div className="col-xl-6">
              <RegisterLeft/>
          </div>
          <div className="col-xl-6">
              <RegisterRight/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register