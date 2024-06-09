import React, { useEffect } from 'react';
import { useRef } from 'react';
import '../styles/navbar.css';
import contact from '/contact1.png';
import { Link, Button,scroller, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import port from '/port.png'

function Navbar() {


 


  const options = {
    // Your options here, for example:
    duration: 500,
    smooth: true,
  };
function reachhome(pxo) {
  scroll.scrollTo(pxo, options);
}
  return (
    <div className='navbar'>
      <img src={port} alt='Logo' className='portlogo'/>
      <div className='laptopmenu'>
        <Link  onClick={()=>{reachhome(50)}}   className='Listitem'>Home</Link>
        <Link  onClick={()=>{reachhome(570)}}  className='Listitem'>About</Link>
        <Link  onClick={()=>{reachhome(1010)}}   to='portfolio'  className='Listitem'>Portfolio</Link>
        <Link to='/clients' className='Listitem'>Clients</Link>
      </div>
      <button className='laptopmenubtn'>
        <img  src={contact} alt='Contact Icon' className='laptopmenuimg'/>Contact Me
      </button>
    </div>
  );
}

export default Navbar;
