import React from 'react'
import Logo from './Logo'

const Navbar = () => {
  return (
    <div className='flex sticky top-0 z-50 backdrop-blur-lg'>
    <div className='bg-blue-400 p-2'>
        <Logo/>
    </div>
    <div>
            <ul className='flex justify between'>
                <li >
                    Home
                </li>
                <li>
                    Home
                </li>
                <li>
                    Home
                </li>
                <li>
                    Home
                </li>
                
            </ul>
    </div>
    </div>
  )
}

export default Navbar