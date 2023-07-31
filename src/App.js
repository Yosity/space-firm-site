import './App.css';
import logo from "./logo.svg"
import Destination from './Destination/Destination';
import Home from "./Home/Home"
import Crew from "./Crew/Crew"
import Technology from "./Technology/Technology"
import {Route,Routes,Link} from "react-router-dom"

import { useState } from 'react';

function App() {

  let [index,setIndex] = useState(0);
  
  let burgerMenu = document.querySelector(".hamburger");
  let mobileNav = document.querySelector("ul");
  return (
    <div className='App'>
      <div onClick={()=>{
        burgerMenu.classList.toggle("open");
        mobileNav.classList.toggle("activated");
        }} className='hamburger'>
        <span className='line'></span>
        <span className='line'></span>
        <span className='line'></span>
        <span className='line'></span>
      </div>
    <img id='logo' src={logo} alt="logo"/>
    <nav className='header-nav'>
      <ul>
        {
          index === 0 ? <li><Link to = "/" className='activated' >HOME</Link></li>
          :
          <li><Link to = "/" onClick={()=>{setIndex(0);}}>HOME</Link></li>
        }
        {
          index === 1 ? <li><Link to= "/destination" className='activated'>DESTINATION</Link></li>
          :
          <li><Link to= "/destination" onClick={()=>{setIndex(1);}}>DESTINATION</Link></li>
        }
        {
          index === 2 ? <li><Link to= "/crew" className='activated' >CREW</Link></li>
          :
          <li><Link to= "/crew" onClick={()=>{setIndex(2);}}>CREW</Link></li>
        }
        {
          index === 3 ? <li><Link to= "/technology" className='activated' >TECHNOLOGY</Link></li> 
          :
          <li><Link to= "/technology" onClick={()=>{setIndex(3);}}>TECHNOLOGY</Link></li> 
        }
        
      </ul>
    </nav>

    <Routes>
      <Route path='/' element = {<Home setIndex = {setIndex}/>}/>
      <Route path='/destination' element = {<Destination/>}/>
      <Route path='/crew' element = {<Crew/>}/>
      <Route path='/technology' element = {<Technology/>}/>
      <Route/>
    </Routes>
    </div>
  );
}

export default App;
