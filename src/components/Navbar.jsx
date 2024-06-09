import React, { useEffect,useState } from 'react';
import { useRef } from 'react';
import '../styles/navbar.css';
import contact from '/contact1.png';
import { Link, Button,scroller, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import port from '/port.png'
import 'remixicon/fonts/remixicon.css'

function Navbar() {

const[screen,setscreen]=useState(window.innerWidth<800);
const[showmenu,setmenu]=useState(false);
 
window.addEventListener('resize',()=>{
setscreen(window.innerWidth<766?true:false)
if(window.innerWidth>766){
  setmenu(false)
}
})


  const options = {
    // Your options here, for example:
    duration: 500,
    smooth: true,
  };
function reachhome(pxo) {
  scroll.scrollTo(pxo, options);
}
  return (<>
    
    <div  style={{
        padding:screen&&'0 0.01rem',
      }}   className='navbar'>
      <img src={port} alt='Logo' className='portlogo'/>
{
screen ?<div><button onClick={()=>{setmenu((pre)=>!pre)}} className='burger'><i class="ri-menu-fill "></i></button></div>:
<div className='laptopmenu'>

<Link  onClick={()=>{reachhome(50)}}   className='Listitem'>Home</Link>
<Link  onClick={()=>{reachhome(570)}}  className='Listitem'>About</Link>
<Link  onClick={()=>{reachhome(1010)}}   to='portfolio'  className='Listitem'>Portfolio</Link>
<Link to='/clients' className='Listitem'>Clients</Link>
</div>


}
     
      <button   className='laptopmenubtn'>
        <img  src={contact} alt='Contact Icon' className='laptopmenuimg'/>Contact Me
      </button>

      {
        showmenu&&<div className='menu'><Link  onClick={()=>{reachhome(50)}}   className='Listitem'>Home</Link>
<Link  onClick={()=>{reachhome(570)}}  className='Listitem'>About</Link>
<Link  onClick={()=>{reachhome(1010)}}   to='portfolio'  className='Listitem'>Portfolio</Link>
<Link to='/clients' className='Listitem'>Clients</Link></div>
      }
      
    </div></>
  );
}

export default Navbar;
