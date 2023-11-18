import React from 'react'

const Button = ({ text, url }) => {
  return (
    <div>
        <a className="btn-yellow" href={url}>
          {text}
          <i className="fa-solid fa-arrow-right-to-bracket"></i>
        </a>
        
    </div>
  )
}

export default Button