import React from 'react'
import './Base.css'
import logo from '../assets/Logo.png'

const Header = () => {
  return (
<>
<header>
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>
  </header>
</>
  )
}

export default Header