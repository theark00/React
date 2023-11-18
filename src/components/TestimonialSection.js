import React from 'react'
import img_testimonial1 from '../assets/images/Ellipse 1.png'
import img_testimonial2 from '../assets/images/Ellipse 1 (1).png'
import img_testimonial3 from '../assets/images/Ellipse 1 (2).png'
import './TestimonialSection.css'
const TestimonialSection = () => {
  return (
    <section className="testimonial">
    <div className="ramen">
      <div className="container">
        <div className="section-title">
          <p>Testimonial</p>
          <h2>What Our Client Says</h2>
        </div>

        <div className="cards">
          <div className="card1">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
            <div className="person"> <img src= {img_testimonial1} />
              <div className="text-profil">
              <h3><a>Cassandra Warren</a></h3>
              <p>Business Manager, Dorfus</p>
              </div> 
            </div>
           
          </div>
          <div className="card2">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
            <div className="person"> <img src={img_testimonial2}/> 
              <div className="text-profil">
              <h3><a>Amanda Tulling</a></h3> 
              <p>Senior Developer, Square</p>
              </div>
            </div>
            

          </div>
          <div className="card3">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
            <div className="person"> <img src={img_testimonial3}/>
              <div className="text-profil">
               <h3><a>Jack McDogglas</a></h3>
              <p>Key Account Manager, Gobona</p>
              </div> 
            </div>
            
            
          </div>
          
        </div>
        <div className="center-content">
          <a className="btn-black" href="projects.html">All Reviews <i
              className="fa-solid fa-arrow-right-to-bracket"></i></a>
        </div>

      </div>
    </div>
  </section>
  )
}

export default TestimonialSection