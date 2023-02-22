import React from 'react'
import "./SinglePost.css"
export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img 
            className='singlePostImg'
            src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
            alt="" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit"></i>
                <i className="singlePostIcon fa-regular fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author: <b>Dev</b>
                </span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className='singlePostDesc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem culpa excepturi fugiat voluptate eos praesentium illo ducimus ex. Quod nisi ab alias eos accusantium labore iste enim! Voluptas dignissimos, ut veritatis, qui illo optio et voluptatibus in sapiente provident, eaque iste iure explicabo necessitatibus! Atque obcaecati deleniti perferendis saepe, ratione quisquam sequi consequuntur, esse eligendi aliquid dolor quas harum non totam minus impedit labore! Explicabo sit cum laudantium odit ullam, repudiandae quam ad officiis sint fugiat error labore. Eveniet asperiores corrupti voluptatibus eligendi sapiente cum. Asperiores animi nesciunt debitis voluptates fuga minus repellendus quam quod, ut consequatur dolores maxime ipsa?aliquid adipisicing elit. Exercitationem culpa excepturi fugiat voluptate eos praesentium illo ducimus ex. Quod nisi ab alias eos accusantium labore iste enim! Voluptas dignissimos, ut veritatis, qui illo optio et voluptatibus in sapiente provident, eaque iste iure explicabo necessitatibus! Atque obcaecati deleniti perferendis saepe, ratione quisquam sequi consequuntur, esse eligendi aliquid dolor quas harum non totam minus impedit labore! Explicabo sit cum laudantium odit ullam, repudiandae quam ad officiis sint </p>
        </div>
    </div>
  )
}
