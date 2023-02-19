import React from 'react'
import './Item5.css'

const Item5 = ({logo5}) => {
  return (
    <div className='section-container' style={{backgroundColor: `black`}}>
        <div className="logo5">
            <img src={logo5} alt="logo4" />
        </div>
        <div className="section-text">
            <h1>Hozz létre<br></br> gyerekprofilokat.</h1>
            <p>Hadd éljék át a gyerekek a kedvenc karaktereik<br></br> kalandjait egy kifejezetten nekik készült, az<br></br> előfizetésed keretében további költség nélkül<br></br> hozzáférhető felületen.</p>
        </div>
    </div>
  )
}

export default Item5