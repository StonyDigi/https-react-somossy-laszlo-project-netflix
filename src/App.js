
import './App.css';

import Logo from  './assets/netflix-logo.png';
import Logo2 from './assets/tv.png';
import Logo3 from './assets/mobile.jpg';
import Logo4 from './assets/device.png';
import Logo5 from './assets/kids.png';
import Item from './components/Item';
import Item2 from './components/Item2';
import Item3 from './components/Item3';
import Item4 from './components/Item4';
import Item5 from './components/Item5';
import Item6 from './components/Item6';
import Footer from './components/Footer';

import Background from './assets/netflix-bg.jpg';

function App() {
  return (
    <div className="App">
        
        <div className="item-container">
        <Item  bg={Background} logo={Logo}/>
        <br />
        <Item2 logo2={Logo2}/>
        <br />
        <Item3 logo3={Logo3} />
        <br />
        <Item4 logo4={Logo4} />
        <br />
        <Item5 logo5={Logo5}/>
        <br/>
        <Item6 />

          </div>
        </div>
    
  );
}

export default App;
