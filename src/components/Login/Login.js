import React, { useState, useEffect } from 'react'
import FormInput from '../FormInput/FormInput'
import { MdOutlineEmail, MdOutlineLock } from 'react-icons/md'
import './Login.scss'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    console.log(email, password)
  }, [email, password])

  return (
    <div className='login-page page'>
      <form className='login-form'>
        <h1 className='title'>Login</h1>
        <FormInput
          icon={<MdOutlineEmail className='icon' />}
          type='email'
          placeholder='steve@example.com'
          name='email'
          val={email}
          setVal={setEmail}
        />
        <FormInput
          icon={<MdOutlineLock className='icon' />}
          type='password'
          placeholder='SuperSecurePassword...'
          name='password'
          val={password}
          setVal={setPassword}
        />
        <button type='submit' className='login-btn btn'>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
