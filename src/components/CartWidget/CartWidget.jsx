import React from 'react'
import { BsFillCartFill } from 'react-icons/bs';
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='CartContainer'>
        <BsFillCartFill/> 16 Items
    </div>
  )
}

export default CartWidget