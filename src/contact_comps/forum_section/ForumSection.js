import React from 'react'
import './Forum.css'
import { useState } from "react";


function ForumSection () {
  const [name, setFirst] = useState('');
  const [email, setSecond] = useState('');
  const [message, setThird] = useState('');

  const handelSubmit =  async (e) => {
    e.preventDefault();
    const user = {name, email, message };
    const json = JSON.stringify(user)
    alert('Message sent!')
    
    const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', { 
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: json




    } )
    
    
    switch (result.status) {
      case 200:
        console.log('Message sent!')
        break;
      case 400:
        console.log(`Oops something went wrong. The problem is ${await result.text()}`)
        break;
    }
    
    
  }



  return (
    <section className="messages">
        <div className="container">
            <div className="center-content"><h2>Leave us a message for any information.</h2></div>
            <div className="username"> 
                
            <form onSubmit={handelSubmit} >
            <input placeholder="Name*" required 
            value={name} 
            onChange={(e) => setFirst(e.target.value)} />
            
            
            
            <input placeholder="Email*" required 
            value={email} 
            onChange={(e) => setSecond(e.target.value)} />
            
            
            
            <textarea placeholder="Your Message*" className="message-big" 
            value={message} 
            onChange={(e) => setThird(e.target.value)} />


              <button className="button-mid">
                <a className="btn-yellow">Send Message <i
                  className="fa-solid fa-arrow-right-to-bracket"></i>
                </a>
              </button>
            </form>
        </div>    
            
            
        </div>
        
    </section>
  )
}

export default ForumSection