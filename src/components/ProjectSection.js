import React from 'react'
import img_project1 from '../assets/images/article-image-1.png'
import img_project2 from '../assets/images/article-image-2.png'
import img_project3 from '../assets/images/article-image-3.png'
import img_project4 from '../assets/images/article-image-4.png'
import './ProjectSection.css'
const ProjectSection = () => {
  return (
    <section className="project-and-case">
      <div className="container">
        <div className="section-title">
          <p>Project & Case Studies</p>
          <h2>Let’s Looks Our Global Projects</h2>
        </div>
        <div className="project-and-case">
          <article>
            <img src= {img_project1} alt="Man reading newspaper"/>
            <h3>Grow your business</h3>
            <a href="#">Read More <i className="fa-solid fa-arrow-right-to-bracket"></i></a>

          </article>
          <article>
            <img src= {img_project2} alt="image of tablet and clock"/>
            <h3>Why your client needs a responsive website</h3>
            <a href="#">Read More <i className="fa-solid fa-arrow-right-to-bracket"></i></a>
          </article>
          <article>
            <img src= {img_project3} alt="image of pen and paper"/>
            <h3>Educate your employees to get better results</h3>
            <a href="#">Read More <i className="fa-solid fa-arrow-right-to-bracket"></i></a>
          </article>
          <article>
            <img src= {img_project4} alt="image of laptop"/>
            <h3>Business Insights is a important piece of your business</h3>
            <a href="#">Read More <i className="fa-solid fa-arrow-right-to-bracket"></i></a>
          </article>
        </div>
        <div className="center-content">
          <a className="btn-black" href="projects.html">All Recent Projects <i
              className="fa-solid fa-arrow-right-to-bracket"></i></a>
        </div>
      </div>
    </section>
  )
}
export default ProjectSection