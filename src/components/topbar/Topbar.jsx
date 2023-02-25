import React from 'react'
import { Link } from 'react-router-dom';
import "./Topbar.css"
export default function Topbar() {
  const user=true;
  return (
    <>
    <div className='top'>
      <div className="topLeft">
        <a href="" target="_blank">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        </a>
        <a href="https://www.instagram.com/gauravsharma459/" target="_blank">
        <i className="topIcon fa-brands fa-instagram"></i>
        </a>
       <a href="https://www.linkedin.com/in/gaurav-sharma-a59b411a5/" target="_blank"> 
         <i className="topIcon fa-brands fa-linkedin"></i> 
       </a>
        <a href="" target="_blank" >
        <i className="topIcon fa-brands fa-twitter"></i>
        </a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className='link' to="/" >HOME</Link>
          </li>
          <li className="topListItem">
          <Link className='link' to="/" >ABOUT</Link>
          </li>
          <li className="topListItem">
          <Link className='link' to="/contact" >CONTACT</Link>       
          </li>
          <li className="topListItem">
          <Link className='link' to="/write" >WRITE</Link>        
          </li>
          <li className="topListItem">
            {user&&"LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
       {
        user?(
          <img 
          className='topImage' 
          src="https://images.unsplash.com/photo-1676558382668-26caa3bddfca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" 
          alt="" 
          />
        ):(
          <ul className='topList'>
            <li className='topListItem'>
                <Link className='link' to="/login" >LOGIN</Link>
            </li>
            <li className='topListItem'> 
             <Link className='link' to="/register" >REGISTER</Link>
             </li>
          </ul>
         )
       }
       <a href="https://www.bing.com/" target="_blank">
       <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
       </a>
      </div>
    </div>
    </>
  )
}
