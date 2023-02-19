import React from 'react'
import './Item.css'

const Item = ({bg, logo}) => {
  return (
    
    <div className='item' style={{ backgroundImage: `url(${bg})`}}>
            
            <div className="header-container">
            
            <div className="logo">
                <img src={logo} alt="logo" />
                </div>
                
                <div className='select'>
                <select name='select1'>
                    <option value="Magyar">Magyar</option>
                    <option value="English">English</option>
                </select>
                <button>Bejelentkezés</button>
                    </div>
                
            </div>
            <div className="item-container">
            
                <div className="item-text">
                    <h1>Filmek, sorozatok és egyéb műsorok korlátlan<br></br> kínálata.</h1>
                        <p>Bárhol nézheted. Bármikor lemondhatod.</p>
                            <p>Készen állsz a műsorainkra? Add meg az e-mail-címedet fiók létrehozásához vagy az előfizetés<br></br> megújításához.</p>
                            </div>
                                <div className="item-input-btn">
                                <input type="search" placeholder='E-mail-cím'/><button>Első lépések</button>
                                    </div>
                                </div>
                            </div>      
  )
}

export default Item