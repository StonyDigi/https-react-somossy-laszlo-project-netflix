import React from 'react';
import { useState } from 'react';
import './Item6.css';

/*

Az useState hookot használjuk a showAnswer változó állapotának nyomon követéséhez. Az handleButtonClick függvényt a gomb kattintásának kezelésére használjuk, amely egyszerűen átkapcsolja a showAnswer értékét.

A gomb szövegének állapota a showAnswer állapotától függően változik, azaz ha a válasz már látható, akkor a gomb szövege "-"-ra változik, hogy tudassuk a felhasználóval, hogy bezárhatja a választ.

A showAnswer állapotának megfelelően megjeleníthetjük vagy elrejthetjük a választ a JSX kódban a feltételes megjelenítés használatával.

*/ 

const Item6 = () => {

  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);
  const [showAnswer4, setShowAnswer4] = useState(false);
  const [showAnswer5, setShowAnswer5] = useState(false);
  const [showAnswer6, setShowAnswer6] = useState(false);

  const handleButtonClick1 = () => {
    setShowAnswer1(!showAnswer1);
  };

  const handleButtonClick2 = () => {
    setShowAnswer2(!showAnswer2);
  };

  const handleButtonClick3 = () => {
    setShowAnswer3(!showAnswer3);
  };
  
  const handleButtonClick4 = () => {
    setShowAnswer4(!showAnswer4);
  };
  
  const handleButtonClick5 = () => {
    setShowAnswer5(!showAnswer5);
  };
  
  const handleButtonClick6 = () => {
    setShowAnswer6(!showAnswer6);
  };

  return (
    
        <div className='story-card-text' style={{backgroundColor: `black`}}>
            <h1>Gyakran ismételt kérdések</h1>
        
        <button className='faq-question' onClick={handleButtonClick1}>
          Mi a Netflix? {showAnswer1 ? '-' : '+'}
        </button>
        <div className={`faq-answer ${showAnswer1 ? 'show' : ''}`} style={{width: `1000px`,backgroundColor: `#2C2C2D`}} >
        A Netflix olyan streaming szolgáltatás, amely díjnyertes sorozatok, filmek, animék, dokumentumfilmek, és további műsorok széles választékát kínálja több ezerféle internetképes eszközön.
        </div>
        <br/>
        <button className='faq-question' onClick={handleButtonClick2}>
        Mennyibe kerül a Netflix? {showAnswer2 ? '-' : '+'}
        </button>
        <div className={`faq-answer ${showAnswer2 ? 'show' : ''}`} style={{width: `1000px`,backgroundColor: `#2C2C2D`}}>
        Nézd a Netflixet okostelefonodon, tableteden, okostévéden, laptopodon, vagy médialejátszódon – mindezt egyetlen havi díjért. A díjcsomagok ára 2 490 Ft és 4 490 Ft között van havonta.
        </div>
        <br/>
        <button className='faq-question' onClick={handleButtonClick3}>
        Hol tudom nézni a műsorokat? {showAnswer3 ? '-' : '+'}
        </button>
        <div className={`faq-answer ${showAnswer3 ? 'show' : ''}`} style={{width: `1000px`,backgroundColor: `#2C2C2D`}}>
        Nézd bárhol, bármikor. Jelentkezz be Netflix fiókodba, és nézd műsorainkat azonnal számítógépeden a netflix.com weboldalon vagy bármilyen internetképes eszközön, amelyen elérhető a Netflix applikáció – például okostévéken, okostelefonokon, tableteken, streaming médialejátszókon és játékkonzolokon.
        </div>
        <br/>
        <button className='faq-question' onClick={handleButtonClick4}>
        Hogyan mondhatom le? {showAnswer4 ? '-' : '+'}
        </button>
        <div className={`faq-answer ${showAnswer4 ? 'show' : ''}`} style={{width: `1000px`,backgroundColor: `#2C2C2D`}}>
          A Netflix számos országban elérhető, beleértve az USA-t, az Egyesült Királyságot, Kanadát, Ausztráliát, Franciaországot és sok más országot.
        </div>
        <br/>
        <button className='faq-question' onClick={handleButtonClick5}>
        Hogyan mondhatom le? {showAnswer5 ? '-' : '+'}
        </button>
        <div className={`faq-answer ${showAnswer5 ? 'show' : ''}`} style={{width: `1000px`,backgroundColor: `#2C2C2D`}}>
          A Netflix számos országban elérhető, beleértve az USA-t, az Egyesült Királyságot, Kanadát, Ausztráliát, Franciaországot és sok más országot.
        </div>
        <br/>
        <button className='faq-question' onClick={handleButtonClick6}>
        Hogyan mondhatom le? {showAnswer6 ? '-' : '+'}
        </button>
        <div className={`faq-answer ${showAnswer6 ? 'show' : ''}`} style={{width: `1000px`,backgroundColor: `#2C2C2D`}}>
          A Netflix számos országban elérhető, beleértve az USA-t, az Egyesült Királyságot, Kanadát, Ausztráliát, Franciaországot és sok más országot.
        </div>
        <p className='footer-p'>Készen állsz a műsorainkra? Add meg az e-mail-címedet fiók létrehozásához vagy az előfizetés<br/> megújításához.</p>
        
        <div className='footer' style={{backgroundColor: `black`, display: `flex`, justifyContent: `center`  }}>
        <div>
            <input style={{border: `1px solid white`, borderRadius: `5px`, marginRight: `50px`,
    fontSize: `20px`,
    width: `490px`,
    padding: `25px`,
    opacity: `0.6`,
    border: `1px solid #61615E`,
    background: `#000000`,
    color: `#A0BAB8`}} type="search" placeholder='E-mail-cím'/>
            </div>
                <button className='btn-footer'>Első lépések</button>
                </div>            
        </div>   
  )
}

export default Item6