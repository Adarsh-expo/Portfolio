import React from 'react'
import profile from '/profile1.png'
import '../styles/info.css'
import box from '/box.png'
import { Link } from 'react-scroll'

function Info() {
  return (
   <section  name='info' className='section'><div className='divmain'><div className='divmain1'>Hello,</div>
   <div className='divmain2'>I'm <span className='span'>Adarsh  Upadhyay</span>
   </div>
   <div className='divmain2'>                                                                                              
    
     a Web App Developer
    
    </div>
    <div className='intro'> I am a well skilled and enthusiastic Web App developer,<br/>Who is eager to grab opportunity,explore and continue learning throughout </div>
    <Link><button className='btn'><img   className='boximg'   src={box}/>Hire Me</button></Link>
    
    </div>
    <img className='profileimg' src={profile}/>
    
    
    </section>
  )
}

export default Info