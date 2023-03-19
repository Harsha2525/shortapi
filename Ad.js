import React from 'react'
import  photo from '../images/illustration-working.svg'

export default function Ad() {
  return (
    <div className="grid-container" >
      <div className='grid-element'><h1>More than just Shorter Links</h1>
        <p>build your brand hefbsefk awuybuhba abrbiaw a</p>
        <button>Get Started</button>
        </div>
        <div className='grid-element'>
          <img src={photo} alt="Add image" />
        </div>
    </div>
  )
}
