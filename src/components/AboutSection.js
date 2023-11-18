import React from 'react'
import img_aboutcompany from '../assets/images/woman-walk.png'
import img_aboutcompany_lines from '../assets/images/EWlement.png'
import './AboutSection.css'
const AboutSection = () => {
  return (
    <section className="about">
      
      <div className="container">
        
        <div className="image">
          <img src= {img_aboutcompany_lines} className="img-overlay"/>
          
          <img src= {img_aboutcompany} alt="woman walking" className="woman-walk"/>

          <div className="bluecard">
            <h3>Samantha Brown,<a className="orange-text">Founder </a> </h3>
          
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
          </div>
        </div>
       
        <div className="höger">
          <div className="section-title">
          
            <p>About Company</p>
            <h2>We Are Business Consulting & Credit Repair Experts</h2>
          </div>
            <div className="under-text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
              
            </div>
            <div className="under-text2">
              <a className="btn-black" href="services.html">Learn More <i className="fa-solid fa-arrow-right-to-bracket"></i></a>
              <a className="video-play"> <i className="fa-regular fa-circle-play"></i> <p>Intro Video</p></a> 
            </div>
            
        </div>

      </div>

    </section>
  )
}

export default AboutSection