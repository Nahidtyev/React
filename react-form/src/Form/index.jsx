import React from 'react'
import { useState } from 'react';
import {BiShowAlt} from "react-icons/bi"
import {BiHide} from "react-icons/bi"
import "./form.css"
import PasswordStrength from '../component/StrengthMeter';

const MyForm = () => {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    function handleMail(e){
        setEmail(e.target.value)
    }
    const CheckValidation =(e)=>{
        e.preventDefault()
        const rgExp = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/;
        if(rgExp.test(email)){
            setMessage("Email is availabe")
        }else if(email===""){
            setMessage("Fill the Email field")
        }
        else if(!rgExp.test(email)){
            setMessage("Email is not availabe")
        }
        else{
            setMessage("")
        }
    }
    const [type, setType]= useState("password")
    const [isCheckboxChecked, setCheckboxChecked] = useState(false);
    const handleCheckboxChange = () => {
      setCheckboxChecked(!isCheckboxChecked);
    };


  return (
    <div className='row justify-content-center g-3'>
        <form id='form' className='col-xl-6 ' onSubmit={CheckValidation}>
            <div className="form-row">
                <div className="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input type="text" className="form-control" id="inputEmail4" value={email} onChange={handleMail} placeholder="Email"/>
                <p>{message}</p>
                </div>
                <div id='password' className="form-group col-md-6" >
                    <label for="inputPassword4">Password</label>
                    <input 
                    type={type}
                    className="form-control" 
                    id="inputPassword4" 
                    placeholder="Password"
                    onChange={ e=> setPassword(e.target.value) }
                    />
                    {type==="password"?(
                            <span id='icon' onClick={()=>setType("text")}>
                            <BiHide fontSize={20}/>
                        </span>
                        ):(
                            <span id='icon' onClick={()=>setType("password")}>
                                <BiShowAlt fontSize={20}/>
                            </span>
                        )}
                <PasswordStrength password={password} />
                </div>
            </div>
            <div className="form-group">
                <div className="form-check">
                <input 
                checked={isCheckboxChecked}
                onChange={handleCheckboxChange}
                className="form-check-input" 
                type="checkbox" 
                id="gridCheck"
                />
                <label className="form-check-label" for="gridCheck">
                    Accept Terms and Conditions
                </label>
                </div>
            </div>
            <button disabled={!isCheckboxChecked}  type="submit" className="btn btn-primary">Sign in</button>
        </form>
    </div>
  )
}

export default MyForm