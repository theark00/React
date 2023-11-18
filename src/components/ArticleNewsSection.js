import React from 'react'
import img_article1 from '../assets/images/Image (10).png'
import img_article2 from '../assets/images/Image (11).png'
import img_article3 from '../assets/images/Image (12).png'
import img_dot_team from '../assets/images/dot.png'
import img_dot_team2 from '../assets/images/dot (1).png'
import './ArticleNewsSection.css'
const ArticleNewsSection = () => {
  return (
    <section className="article-news">
      <div className="container">
        <div className="section-title">
          <p>Article & News</p>
          <h2>Get Every Single Articles & News</h2>
        </div>
        <div className="button-upp">
          <a className="btn-yellow" href="projects.html">Browse Articles <i
            className="fa-solid fa-arrow-right-to-bracket"></i></a>
        </div>
        <div className="buisness">

          <div className="buisness-image">
            <div className="datum"><h4>25</h4><p>Mar</p></div>
            <img src= {img_article1} alt="woman"/>
            <p className="över-h3">Business</p>
             <h3 className="h3-1">How To Use Digitalization In The Classroom</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p> </div>

          <div className="buisness-image">
            <div className="datum"><h4>17</h4><p>Mar</p></div>
            <img src={img_article2} alt="website"/>
            <p className="över-h3">Business</p>
             <h3 className="h3-2">How To Implement Chat GPT In Your Projects</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p> </div>

          <div className="buisness-image">
            <div className="datum"><h4>13</h4><p>Mar</p></div>
            <img src={img_article3} alt="books about CSS"/> 
            <p className="över-h3">Business</p>
            <h3 className="h3-3">The Guide To Support Modern CSS Design</h3>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p> </div>


        </div>
        <div className="punkter"> 
          <div className="punkt-select"><img src={img_dot_team2}/> </div>
          <div className="punkt"> <img src={img_dot_team}/>  </div>
          <div className="punkt"><img src={img_dot_team}/></div>
          <div className="punkt"><img src={img_dot_team}/></div>
          <div className="punkt"><img src={img_dot_team}/></div>
        </div>

        <div className="button-ned">
          <a className="btn-yellow" href="projects.html">Browse Articles <i
            className="fa-solid fa-arrow-right-to-bracket"></i></a>
        </div>

      </div>

    </section>
  )
}

export default ArticleNewsSection