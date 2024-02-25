import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../Input';
import "./yup.scss"
import { Link } from 'react-router-dom';
import {BiHide} from 'react-icons/bi'
import {BiShowAlt} from 'react-icons/bi'

const SignupSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const ReactYup = () => {
  const [type, setType] = useState("password"); // Add this line for controlling password visibility

  return (
    <div className="container" id='yup'>
      <div className="row justify-content-center align-items-center">
        <div className="col-xl-12">
          <Formik
            initialValues={{
              fullname: '',
              email: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className='frm'>
                <label>Full Name</label> <br />
                <Input name="fullname" type="fullname"/> <br />
                {errors.fullname && touched.fullname ? (
                  <div>{errors.fullname}</div>
                ) : null} <br />
                <label>Password</label> <br />
                <div className="passworder">
                    <Input
                    name="password" 
                    type={type} // Use the controlled type here
                    className="psw"
                    onChange={e => setType(e.target.value)}
                    />
                    {type === "password" ? (
                    <span id='icon' onClick={() => setType("text")}>
                        <BiHide fontSize={20}/>
                    </span>
                    ) : (
                    <span id='icon' onClick={() => setType("password")}>
                        <BiShowAlt fontSize={20}/>
                    </span>
                    )}
                </div>
                {errors.email && touched.email ? <div>{errors.email}</div> : null} <br />
                <input type='submit' className='Login' placeholder='Login'/>
                <p>Don’t have an account ? <Link to="/register" className='link'>Register</Link></p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default ReactYup;
