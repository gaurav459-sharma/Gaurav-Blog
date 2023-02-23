import React from 'react'
import "./Write.css"

export default function Write() {
  return (
    <div className='write'>
      <img 
      className='writeImg'
      src="https://images.unsplash.com/photo-1513735067290-e2928f4908ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1857&q=80"
      alt="" />
        <form className='writeForm'>
         <div className="writeFormGroup">
            <label htmlFor="fileInput">
                <i className='writeIcon fas fa-plus'></i>
            </label>
            <input type="file" id='fileInput' style={{display:"none"}} />
            <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
         </div>
         <div className="writeFormGroup">
            <textarea
            className='writeInput writeText'
            placeholder='Tell your story...' 
            type="text">    
             </textarea>
         </div>
         <button className='writeSubmit'>Publish</button>
        </form>
    </div>
    
  )
}
