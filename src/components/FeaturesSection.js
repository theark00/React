import React from 'react'
import './FeaturesSection.css'

const FeaturesSection = () => {
    return (
        <section className="features">
        <div className="container">
          <div className="section-title">
            <p>Features</p>
            <h2>Our Accounting is trusted by thousand of companies</h2>
            <a className="btn-yellow" href="services.html">Learn More <i className="fa-solid fa-arrow-right-to-bracket"></i></a>
          </div>
          
          <div className="höger">
            
            <div>
              <i className="fa-regular fa-handshake"></i>
              <h3>Business Advice</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
  
  
            <div>
              <i className="fa-regular fa-lightbulb"></i>
              <h3>Startup Business</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
  
            <div>
              <i className="fa-solid fa-arrow-trend-up"></i>
              <h3>Financial Advice</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
  
            <div>
              <i className="fa-solid fa-gears"></i>
              <h3>Risk Management</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        
        </div>
      </section>
    )
  }

export default FeaturesSection