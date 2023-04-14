import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [toggle,setToggle] = useState(false)
  const move =(e)=>{

    if(!toggle) return;
    const tabs = document.querySelector('.tabs')
    tabs.scrollLeft -= e.movementX;
  }
  const start=()=>{
    setToggle(true)
  }
  const end=()=>{
    setToggle(false)
  }
  return (
    <section className='section'>
      <div className='left-icon icon'>L</div>
      <ul onTouchEnd={end} onTouchStart={start} onTouchMove={move} className='tabs'>
        <li className='tab'>About</li>
        <li className='tab'>Ball</li>
        <li className='tab'>Cat</li>
        <li className='tab'>Dog</li>
        <li className='tab'>Egg</li>
        <li className='tab'>Frog</li>
        <li className='tab'>Goat</li>
        <li className='tab'>Home</li>
        <li className='tab'>Ice-cream</li>
        <li className='tab'>Jug</li>
        <li className='tab'>Knee</li>
        <li className='tab'>Lemon</li>
        <li className='tab'>Mango</li>
        <li className='tab'>Net</li>
        <li className='tab'>Orange</li>
        <li className='tab'>Paradise</li>
        <li className='tab'>Queen</li>
        <li className='tab'>Raja</li>
      </ul>
      <div className='right-icon icon'>R</div>
    </section>
  )
}

export default App
