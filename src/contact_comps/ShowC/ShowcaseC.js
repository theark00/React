import React from 'react'
import './ShowcaseC.css'
import img_showcase_lines from '../assets/images/background-lines.svg'
const ShowcaseC = () => {
  return (
    <section className="showcaseC">
      <img className="back-linesC" src= {img_showcase_lines} />
      <div className="container">
        <div className="content">
          <div className="home_contact">
            <p>Home </p>
            <p>Contact</p>  
          </div>
          <h1>Let’s Connect</h1>
          
          
        </div>
        

      </div>
    </section>
  )
}

export default ShowcaseC