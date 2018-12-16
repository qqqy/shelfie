import React from 'react'
import { Link } from 'react-router-dom'

export default function(){
  return(
    <div className='header-main'>
    This is Header
    <Link to='/'><button>Dashboard</button></Link>
    <Link to='/add'><button>Add Product</button></Link>
    </div>
  )
}