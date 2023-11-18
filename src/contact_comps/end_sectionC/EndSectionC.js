import React from 'react'
import './EndC.css'
import img_right_line_back from '../assets/images/background-lines-white-right.svg'
import img_logotype2 from '../assets/images/Logo.png'

const EndSectionC = () => {
  return (
    <footer>
        <div className="slut">
        <div className="right-vave-slut"> <img src= {img_right_line_back} /></div>
        <div className="container">
            <div className="slut-över">
            <div className="logo-text">
                <a href="index.html"><img src= {img_logotype2} alt="crito logotype"/></a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium. </p>
            </div>
            
            <div className="company-text"> <h3>Company</h3> <p>About Features Works Career</p></div>
            <div className="help-text"> <h3>Help</h3> <p>Customer Support Delivery Details Terms & Conditions Privacy Policy</p></div>
            <div className="resources-text"><h3>Resources</h3> <p>Free eBooks Development Tutorial How to - Blog Youtube Playlist</p></div>
            <div className="link-text"> <h3>Link</h3> <p>Free eBooks Development Tutorial How to - Blog Youtube Playlist</p></div>
            </div>
            <div className="pop-up">
            <a href="index.html"><img src="bilder/Logo.png" alt="crito logotype"/></a>
            <button className="menu-bars"><i className="fa-solid fa-bars"></i></button>
            </div>
            <div className="slut-tag">
            <div className="slut-tag-vänster"> <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p></div>
            <div className="social">
                <a className="active" href="#"><i className="fa-brands fa-facebook"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            </div>
            </div>
        </div>
        </div>

    </footer>
  )
}

export default EndSectionC