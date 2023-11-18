import React from 'react'
import img_Services from '../assets/images/background-lines-right.svg'
import './OurServicesSection.css'
const OurServicesSection = () => {
  return (
    <section className="our-services">
        <img src= {img_Services} className="back-lines"/>
      <div className="container">
        <div className="section-title">
          <p>Our Services</p>
          <h2>We Provide The Best Service For Consulting</h2>
        </div>
        <div className="cards">
          <div className="card1">
            <h3><a>Business Advice</a></h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
            <i className="fa-solid fa-arrow-right"></i>
          
          </div>
          <div className="card2">
             <h3> <a>Startup Business</a></h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
          <div className="card3">
             <h3><a>Financial Advice</a></h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
          <div className="card4">
            <h3> <a href="risk-managemnt.html">Risk Management</a></h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="center-content">
          <a className="btn-black" href="projects.html">All Reviews <i
              className="fa-solid fa-arrow-right-to-bracket"></i></a>
        </div>
      </div>
    </section>
  )
}

export default OurServicesSection