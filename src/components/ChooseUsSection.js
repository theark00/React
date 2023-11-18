import React from 'react'
import img_ChooseUs from '../assets/images/Image (5).png'
import './ChooseUsSection.css'
const ChooseUsSection = () => {
  return (
    <section className="choose-us">
      
      <div className="container">
        <div className="section-title">
          <p>Why Choose Us</p>
          <h2>Why We Are The Best Business Consulting Agency</h2>
        </div>

        <div className="vänster">
          
          <div className="mindre-text">
            <i className="fa-regular fa-thumbs-up"></i>
            <div> <h3>Process Excellence</h3>
            <p>Lorem, ipsum dolor sit amet consectetur.</p></div>
          </div>


          <div className="mindre-text">
            <i className="fa-solid fa-chess"></i>
           <div> <h3>Strategic Planning</h3>
            <p>Lorem, ipsum dolor sit amet consectetur.</p></div>
          </div>

          <div className="mindre-text">
            <i className="fa-solid fa-pen-nib"></i>
            <div> <h3>Experience Design</h3>
            <p>Lorem, ipsum dolor sit amet consectetur.</p></div>
          </div>

          <div className="mindre-text">
            <i className="fa-solid fa-brain"></i>
            <div> <h3>Artificial Inteligence</h3>
            <p>Lorem, ipsum dolor sit amet consectetur.</p></div>
          </div>


          
        </div>
            <div className="höger">
              <div> <img src= {img_ChooseUs} alt="buisness meeting"/></div>
              <div className="bakom-bild"></div>
            </div>
        
      </div>
      
    </section>
  )
}

export default ChooseUsSection