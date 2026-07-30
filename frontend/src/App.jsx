import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Logo from './components/Logo'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className='max-w-7xl mx-auto pt-10 px-6'>
        <Logo/>
        <Logo/>
        <Logo/>
        <Logo/>
        <Logo/>
        <Logo/>
        <Logo/>
        <Logo/>
        <Logo/>
        <Logo/>
        <Logo/>
        <Logo/>
        <Logo/>
        <Logo/>
        <Logo/>
        <Logo/>
        <Logo/>
        <Logo/>
        <Logo/>
        <Logo/>
        <Logo/>
        <Logo/>
        <Logo/>
        <Logo/>
        <Logo/>

      </div>
    </>
  )
}

export default App
