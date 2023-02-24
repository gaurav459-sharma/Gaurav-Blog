import React from 'react'
import "./Register.css"

export default function Register() {
  return (
    <div className='register'>
        <span className='registerTitle'>Register</span>
        <form className="registerForm">
            <label htmlFor="">Username</label>
            <input 
            className='registerInput' 
            type="text" 
            placeholder='Enter Your Username..'
            />
            <label htmlFor="">Email</label>
            <input 
            className='registerInput' 
            type="email" 
            placeholder='Enter Your Email..'
            />
            <label htmlFor="">Password</label>
            <input 
            className='registerInput' 
            type="password" 
            placeholder='Enter Your Password..'
            />
            <button className='registerButton'>Register</button>
        </form>
        <button className='registerLoginButton'>Login</button>

    </div>
  )
}
