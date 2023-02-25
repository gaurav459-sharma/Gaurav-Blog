import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <div className="contact_container">

    <div className="contact_content">

      <div className="contact_leftside">

        <div className="contact_details">
          <i className="fas fa-map-marker-alt"></i>
          <div className="topic">Address</div>
          <div className="text_one">Surkhet, NP12</div>
        </div>

        <div className="contact_details">
          <i className="fas fa-phone-alt"></i>
          <div className="topic">Phone</div>
          <div className="text_one">+0098 9893 5647</div>
        </div>

        <div className="contact_details">
          <i className="fas fa-envelope"></i>
          <div className="topic">Email</div>
          <div className="text_one">codinglab@gmail.com</div>
        </div>
      </div>

      <div className="contact_rightside">
        <div className="topic_text">Send us a message</div>
        <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
      <form >
        <div className="input_box">
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div className="input_box">
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div className="input_box message_box">
        <textarea name="subject" placeholder="Write something.."></textarea>
        </div>
        <div className="button">
          <input type="button" value="Send Now"/ >
        </div>
      </form>
    </div>
    </div>
  </div>
  )
}

export default Contact