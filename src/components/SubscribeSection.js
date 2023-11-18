import React from 'react'
import img_right_line from '../assets/images/Element.png'
import './SubscribeSection.css'
const SubscribeSection = () => {
  return (
    <section className="subscribe">
      <div className="line-höger">
      <img src= {img_right_line} /></div>
      <div className="container">
        <div className="section-title">
          <h2>Get News Updates By Signup</h2>
        </div>
        <div className="username">
          
            <form method="get" action="/url">
             <input type="text" id="username-domain" placeholder="username@domain.com"/>
            
            </form>
          
          <div className="button-höger">
            <a className="btn-yellow" href="projects.html">Subscribe 
            <i className="fa-solid fa-arrow-right-to-bracket"></i></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubscribeSection