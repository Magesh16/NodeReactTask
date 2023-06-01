import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className ="Navbar-container">
      <div className='Navbar-logo'>
        <img src="https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-m-design_460848-10168.jpg"></img>
      </div>
      <div className='Navbar-content'>
        <div className='links'>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href='/'>Posts</a>
          <a href="/">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar