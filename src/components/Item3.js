import React from 'react'

const Item3 = ({logo3}) => {
  return (
    <div className='section-container' style={{backgroundColor: `black`}}>

        <div className="logo3">
            <img src={logo3} alt="logo3" />
        </div>

        <div className="section-text">
            <h1>Töltsd le a műsorokat, és nézd őket offline.</h1>
            <p>Mentsd el egyszerűen a kedvenceidet, hogy mindig legyen néznivalód.</p>
        </div>

        

    </div>
  )
}

export default Item3