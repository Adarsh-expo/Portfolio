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


  
function reachhome(pxo) {
  document.getElementById(`${pxo}`).scrollIntoView({
    behavior: 'smooth'
   
  });
}
  return (<>
    
    <div  style={{
        padding:screen&&'0 0.01rem',
      }}   className='navbar'>
      <img src={port} alt='Logo' className='portlogo'/>
{
screen ?<div><button onClick={()=>{setmenu((pre)=>!pre)}} className='burger'><i class="ri-menu-fill "></i></button></div>:
<div className='laptopmenu'>

<Link  activeClass='active' to='info' spy={true}  smooth={true} duration={800} offset={-250} className='Listitem'>Home</Link>
<Link   activeClass='active' to='about' spy={true} smooth={true} duration={800} offset={-150} className='Listitem'>About</Link>
<Link  activeClass='active'  to='portfolio' spy={true} smooth={true}  duration={800} offset={-270} className='Listitem'>Portfolio</Link>
<Link  activeClass='active' to='project' spy={true} smooth={true } duration={800} offset={-150}  className='Listitem'>Project</Link>
</div>


}
     
      <button  onClick={()=>{reachhome('abc')}}  className='laptopmenubtn'>
        <img  src={contact} alt='Contact Icon' className='laptopmenuimg'/>Contact Me
      </button>

      {
        showmenu&&<div className='menu'>
<Link activeClass='active' to='info' spy={true}  smooth={true} duration={800} offset={-250} className='Listitem'>Home</Link>
<Link  activeClass='active' to='about' spy={true} smooth={true} duration={800} offset={-150} className='Listitem'>About</Link>
<Link  activeClass='active'  to='portfolio' spy={true} smooth={true}  duration={800} offset={-270}     className='Listitem'>Portfolio</Link>
<Link   activeClass='active' to='project' spy={true} smooth={true } duration={800} offset={-150}           className='Listitem'>Project</Link></div>
      }
      
    </div></>
  );
}

export default Navbar;
