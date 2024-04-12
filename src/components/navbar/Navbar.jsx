import React from 'react'
import {RiMenu3Line, RiCloseLin} from 'react-icons/ri'
import './navbar.css';
import logo from '../../assets/logo.svg';

// BEM -> Block Element Modifier
function navbar() {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links-logo'></div>
        <img src={logo} alt="logo" />
    </div>
      
    </div>
  )
}

export default navbar
