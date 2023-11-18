import React from 'react'
import img_showcase from '../assets/images/showcase-image.svg'
import img_showcase_lines from '../assets/images/background-lines.svg'
import './ShowcaseSection.css'
const ShowcaseSection = () => {
  return (
    <section className="showcase">
      <img className="back-lines" src= {img_showcase_lines} />
      <div className="container">
        <div className="content">
          <h1>We Provide The Best Business Solutions </h1>
          <p> Establish your vision and value proposition and turn them into testable prototypes.</p>
          <a className="btn-yellow" href="consulting.html">Get Consulting <i
              className="fa-solid fa-arrow-right-to-bracket"></i></a>
          <a className="btn-yellow" href="services.html">Learn More <i className="fa-solid fa-arrow-right-to-bracket"></i></a>
        </div>
        <img src={img_showcase}  alt="man in a suit"/>

      </div>
    </section>
  )
}

export default ShowcaseSection