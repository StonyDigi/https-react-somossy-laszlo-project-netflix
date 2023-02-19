import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer1' style={{backgroundColor: `black`}}>
       <h3>Kérdésed van? Hívd a(z) 80 982 790 számot!</h3>

       <ul>
        <li><a href='/'>GYIK</a></li>
        <li><a href='/'>Fiók</a></li>
        <li><a href='/'>Karrier</a></li>
        <li><a href='/'>Megtekintési lehetőségek</a></li>
        <li><a href='/'>Cookie beállítások</a></li>
        <li><a href='/'>Sebességteszt</a></li>
        <li><a href='/'>Kizárólag a Netflix műsorán</a></li>
        
       </ul>
       </div>
  )
}

export default Footer