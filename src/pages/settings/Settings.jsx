import React from 'react'
import "./Settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className='settingsTitle'>
              <span className="settingsUpdateTitle">Update Your Account</span>
              <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className='settingForm'>
              <label >Profile Picture</label>
              <div className="settingPP">
                <img 
                src="https://images.unsplash.com/photo-1676313660430-d579ecb6bc75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80" 
                alt="" />
                <label htmlFor="fileInput">
                  <i className='settingsPPIcon far fa-user-circle'></i>
                </label>
                <input type="file" id='fileInput' style={{display:"none"}} />
              </div>
              <label>Username</label>
              <input type="text" placeholder='Dev' />
              <label>Email</label>
              <input type="email" placeholder='dev123@gmail.com' />
              <label>Password</label>
              <input type="password" />
              <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
