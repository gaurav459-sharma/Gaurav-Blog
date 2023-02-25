import React from 'react'
import "./Post.css"
import { Link } from 'react-router-dom';
export default function Post() {
  return (
    <div className='post'>
       <Link className='link' to="/post/:postId">
       <img 
        className='postImg'
        src="https://images.unsplash.com/photo-1676959138346-a89e5a07567d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80" 
        alt="" />
       </Link>
       
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
            <Link className='link' to="/post/:postId">Lorem ipsum dolor sit amet.</Link>
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo corporis nesciunt sequi amet harum quis labore ut delectus voluptas, error atque sapiente. Sunt magni asperiores ad illum corrupti officiis placeat, saepe delectus inventore quia, aspernatur dolores enim, similique ab. Ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe repellat architecto assumenda fugiat iusto veniam quae non illum officia itaque dicta nobis impedit, quod ratione molestiae blanditiis sapiente modi mollitia!</p>
    </div>
  )
}
