import React from 'react'
import "./SinglePost.css"
export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img 
            className='singlePostImg'
            src="https://images.unsplash.com/photo-1676464436590-ecf26c3572f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=390&q=80"
            alt="" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                <i class="far fa-edit"></i>
                <i class="fa-regular fa-trash-can"></i>
                </div>
            </h1>
        </div>
    </div>
  )
}
