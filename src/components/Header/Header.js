import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/shelfie_icon.png'

export default function(){
  return(
    <div className='header-main'>
    <div className='logo-box'>
      <img className='logo-image' src={logo} alt='logo' />
      
      <h1>SHELFIE</h1>
    </div>
    <Link to='/'><button className='header-button'>Dashboard</button></Link>
    <Link to='/add'><button className='header-button'>Add Inventory</button></Link>
    </div>
  )
}