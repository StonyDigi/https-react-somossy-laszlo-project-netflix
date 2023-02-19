import React from 'react'
import './Item2.css'

const Item2 = ({logo2}) => {
  return (
    <div className='section-container' style={{backgroundColor: `black`}}>
        <div className="section-text">
            <h1>Mintha csak tévét<br></br> néznél.</h1>
            <p>Nézd a műsorokat okostévén, Playstationön, Xboxon, Chromecaston, Apple TV-n, Blu-ray lejátszón vagy sok<br></br> más készüléken.</p>
        </div>
        <div className="logo2">
            <img src={logo2} alt="logo2" />
        </div>
    </div>
  )
}

export default Item2