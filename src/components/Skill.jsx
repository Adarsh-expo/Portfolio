import React from 'react'
import '../styles/Skill.css'
import ui from '/ui.jpg'
import web from '/webdev.png'
function Skill({section2}) {
  return (
    <div name='about'    ref={section2} className='skill'>

<div className='about'>Things I Do</div>
<p className='para'>I am a well skilled and well crafted we application developer<br/>with well understanding
    of frontend and backend development<br/>I do create visual appealing and responsive web application</p>
<div className='skillvalue'><img className='img'   src={ui}/>UI Design</div>
<div className='skillvalue'><img className='img'   src={web}/>Web Application Design</div>
    </div>
  )
}

export default Skill