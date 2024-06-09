import React from 'react'
import react from'/react.jpg'
import postgres from '/postgres.jpg'
import css from '/css-3.png'
import html from '/html.jpg'
import nodejs from '/node.jpg'
import javascript from '/logo-javascript.svg'
import '../styles/Tech.css'

function Portfolio() {
  return (
    <div name='portfolio' id='wwe' className='tech'><span className='techeading'>Technologies</span>
    <div className='tech2'>
    <div className='techeach' ><img className='techimg'  src={javascript}/>Javascript</div>
    <div  className='techeach'    ><img className='techimg'   src={react}/>React Js</div>
    <div  className='techeach'   ><img className='techimg'     src={nodejs}/>Node Js</div>
    <div className='techeach'     ><img className='techimg'      src={postgres}/>Postgres Sql</div>
    <div className='techeach'     ><img  className='techimg'    src={html}/>Html</div>
    <div className='techeach'    ><img  className='techimg'     src={css}/>Css</div>
    
    </div>
    
    
   
    
    </div>
  )
}

export default Portfolio