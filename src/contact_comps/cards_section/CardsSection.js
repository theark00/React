import React from 'react'
import './CardsC.css'
const CardsSection = () => {
  return (
    <section className="contact_cards">
      
    <div className="container">
      
      <div className="cards">
        <div className="card1">
         <h3><i className="fa-solid fa-location-dot"></i>
          <a>Visit us</a></h3>
          <p>Sveavägen 31 111 34 STOCKHOLM</p>
         
        
        </div>
        <div className="card2">
          <h3>  <i className="fa-solid fa-phone"></i>
          <a>Call us</a></h3>
          <p className="pcard2">+46 (8) 121 470 50 +46 (8) 121 470 51</p>
          
        </div>
        <div className="card3">
         <h3> <i className="fa-solid fa-envelope"></i>
           <a>Email us</a></h3>
          <p >info@crito.com support@crito.com</p>
         
        </div>
        
      </div>
      
    </div>
  </section>
  )
}

export default CardsSection