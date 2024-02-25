import React from 'react'
import "./regright.scss"
import { Link } from 'react-router-dom'

const RegisterRight = () => {
  return (
    <div className="row justify-content-center align-items-center ">
        <div className="col-xl-10">
            <div className=" register-right">
                <h1>Register</h1>
            {/* <ReactYup/> */}
            <p>Already have an account ? <Link to="/" className='link'>Login</Link></p>
            </div>
        </div>
    </div>
  )
}

export default RegisterRight