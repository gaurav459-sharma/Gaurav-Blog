import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='login'>
        <span className='loginTitle'>Login</span>
        <form className="loginForm">
            <label htmlFor="">Email</label>
            <input 
            className='loginInput' 
            type="email" 
            placeholder='Enter Your Email..'
            />
            <label htmlFor="">Password</label>
            <input 
            className='loginInput' 
            type="password" 
            placeholder='Enter Your Password'
            />
            <button className='loginButton'>Login</button>
        </form>
        <button className='loginRegisterButton'>
          <Link className='link' to="/register">Register</Link>
        </button>

    </div>
  )
}
