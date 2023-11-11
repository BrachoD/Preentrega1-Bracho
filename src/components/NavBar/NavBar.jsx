import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import elogo from '../../assets/logo-db.png'



const NavBar = () => {
  return (
    <div className='nav'>
        <img src={elogo} height="100"/>
        <ul>
            <li className='button'>Home</li>
            <li className='button'>Products</li>
            <li className='button'>About</li>
        </ul>
        <CartWidget/>
    </div>
  )
}

export default NavBar