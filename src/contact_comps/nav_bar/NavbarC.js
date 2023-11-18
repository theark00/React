import React from 'react'
import img_logotype from '../assets/images/Logo.svg'

const NavbarC = () => {
  return (
    <header>
    <div className="container">
      <a href="index.html"><img src= {img_logotype} alt="crito logotype" /></a>
      <button className="menu-bars"><i className="fa-solid fa-bars"></i></button>
      <div className="menu">
        <div className="top-menu">
          <div className="contact-info">
            <div className="content-box"> 
              <i className="fa-solid fa-phone-volume"></i>
              +46 (8) 121 470 50
            </div>
            <div className="content-box">
              <i className="fa-regular fa-envelope"></i>
              info@crito.com
            </div>
            <div className="content-box-last">
              <i className="fa-solid fa-location-dot"></i>
              Sveavägen 31, 111 34 STOCKHOLM
            </div>

          </div>
          <div className="social">
            <a className="active" href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
        <div className="main-menu">
          <nav>
            <a href="/">Home</a>
            <a href="/">Service</a>
            <a href="/">News</a>
            <a href="/contact">Contact</a>
          </nav>
          <a className="btn-yellow" href="login.html">Login <i className="fa-solid fa-arrow-right-to-bracket"></i></a>
        </div>
      </div>
    </div>

  </header>
  )
}

export default NavbarC