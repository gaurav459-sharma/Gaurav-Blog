import React from 'react'
import "./Sidebar.css"

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img 
            src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam debitis, voluptatem porro deleniti, consectetur expedita sed voluptates, praesentium doloremque libero quisquam rem! Ullam, ad! Deserunt, recusandae excepturi? Ducimus, veritatis. Obcaecati accusantium, nemo sed iure consectetur ullam. Dolorem optio id eum.</p>
        </div>
        <div className='sidebarItem'>
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className='sidebarList'>
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>
        <div className='sidebarItem'>
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">

        <a href="" target="_blank">
        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        </a>
        <a href="https://www.instagram.com/gauravsharma459/" target="_blank"> 
        <i className="sidebarIcon fa-brands fa-instagram"></i>
        </a>
       <a href="https://www.linkedin.com/in/gaurav-sharma-a59b411a5/" target="_blank"> 
         <i className="sidebarIcon fa-brands fa-linkedin"></i> 
       </a>
       <a href="" target="_blank">
       <i className="sidebarIcon fa-brands fa-twitter"></i>
       </a>
        </div>

        </div>



    </div>
  )
}
