import { useState } from 'react'
import Navbar from './components/Navbar'
import Info from './components/Info'
import Skill from './components/Skill'
import Portfolio from './components/Portfolio'
import { useRef } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const section1=useRef();
  const section2=useRef();
  const section3=useRef();

  



  return <div className='app'>
    <Navbar section1={section1}  section2={section2} section3={section3} />
  
  <Info/>
  <Skill   section2={section2} />
  <Portfolio/>
  </div>
    
      
  
}

export default App
