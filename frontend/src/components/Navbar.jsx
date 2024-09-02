import React from 'react'
import precioChileno from '../utils/utils.js'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const total = 25000
  const token = false
  let buttonA = ''
  let buttonB = ''
  let linkA = ''
  let linkB = ''
  if (token==false) {
    buttonA = '🔐 Login'
    buttonB = '🔐 Register'
    linkA = '/login'
    linkB = '/register'
  } else {
    buttonA = '🔓 Profile'
    buttonB = '🔒 Logout'
    linkA = '/profile'
    linkB = '/'
  }
  return (
    <div className='Navbar'>
      <div className='buttonsNavContainer'>
        <div className='tittleContainer'>Pizzería Mamma Mia!</div>
        <Link to="/"><div className='buttonNavbar'>🍕 Home</div></Link>
        <Link to={linkA}><div className='buttonNavbar'>{buttonA}</div></Link>
        <Link to={linkB}><div className='buttonNavbar'>{buttonB}</div></Link>
      </div>
      <div>
        <Link to='/cart'><div className='cartContainer'>🛒 Total: {precioChileno(total)}</div></Link>
      </div>
    </div>
  )
}

export default Navbar