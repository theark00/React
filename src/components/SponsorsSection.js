import React from 'react'
import img_sponsor1 from '../assets/images/paperz.svg'
import img_sponsor2 from '../assets/images/dorfus.svg'
import img_sponsor3 from '../assets/images/martino.svg'
import img_sponsor4 from '../assets/images/square.svg'
import img_sponsor5 from '../assets/images/gobona.svg'
import './SponsorsSection.css'
const SponsorsSection = () => {
    return (
        <section className="sponsors">
            <div className="container">
                <div className="images">
                    <img src= {img_sponsor1} />
                    <img src= {img_sponsor2} />
                    <img src= {img_sponsor3} />
                    <img src= {img_sponsor4} />
                    <img src= {img_sponsor5} />
                </div>
            </div>
        </section>
    )
  }

export default SponsorsSection