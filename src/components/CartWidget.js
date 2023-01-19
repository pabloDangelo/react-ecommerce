import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
  return (
  <>
    <div className='CartWidget'>
        <span class="material-icons" style={{'font-size':40}}>shopping_cart</span>
        <span style={{position: 'absolute', right: 10, bottom: 25, color: 'red'}}>5</span>
    </div>
  </>)
}

export default CartWidget