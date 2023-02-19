import React from 'react'
import './Item4.css'

const Item4 = ({logo4}) => {
  return (
    <div className='section-container' style={{background: `black`}}>
        <div className="section-text">
            <h1>Bárhol nézheted.</h1>
            <p>Streamelj korlátlanul filmeket és sorozatokat telefonon, tableten, laptopon és tévén, további díjak nélkül.</p>
        </div>
        <div className="logo2">
            <img src={logo4} alt="logo4" />
        </div>
    </div>
  )
}

export default Item4