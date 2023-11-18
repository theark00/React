import React from 'react'
import img_team1 from '../assets/images/Image (6).png'
import img_team2 from '../assets/images/Image (7).png'
import img_team3 from '../assets/images/Image (8).png'
import img_team4 from '../assets/images/Image (9).png'
import img_dot_team from '../assets/images/dot.png'
import img_dot_team2 from '../assets/images/dot (1).png'
import './MeetOurTeamSection.css'
const MeetOurTeamSection = () => {
  return (
    <section className="meet-our-team">
      
      <div className="container">
        <div className="över">
          <div className="section-title">
            <p>Meet Our Team</p>
            <h2>Experience Team Members</h2>
            
          </div>
          <div className="button-upp">
            <a className="btn-yellow" href="projects.html">Browse Team <i
              className="fa-solid fa-arrow-right-to-bracket"></i></a>
          </div>
        </div>
        <div className="team-image">
          <div className="image-team"><img src= {img_team1} alt="woman"/> <h3>Kristine Palmer</h3> <p>Chef Operation Officer</p> </div>
          <div className="image-team"><img src= {img_team2} alt="man"/> <h3>Mark Aubri</h3> <p>Senior Consultant</p> </div>
          <div className="image-team"><img src= {img_team3} alt="woman"/> <h3>Kimberly Hansen</h3> <p>Senior Consultant</p> </div>
          <div className="image-team"><img src= {img_team4} alt="man"/> <h3>Justin Willoman</h3> <p>Senior Tech Consultant</p> </div>
          
        </div>
        <div className="punkter"> 
          <div className="punkt"> <img src= {img_dot_team} />  </div>
          <div className="punkt-select"><img src={img_dot_team2}/> </div>
          <div className="punkt"><img src={img_dot_team}/></div>
          <div className="punkt"><img src={img_dot_team}/></div>
          <div className="punkt"><img src={img_dot_team}/></div>
        </div>
        

      </div>

    </section>
  )
}
export default MeetOurTeamSection