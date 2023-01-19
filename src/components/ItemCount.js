import React, { useState } from 'react';
import './ItemCount.css'

export const ItemCount = ({stock}) => {
    const [count, setCount] = useState(stock);

    //----------------------------------------
    // Handlers
    //----------------------------------------
    const incrementHandler = () => {
        setCount(count + 1);
    }

    const decrementHandler = () => {
        if(count === 0)
            return;
        setCount(count - 1);
    }

    const onAddHandler = () => {
        if(stock === 0) {
            console.log(`No hay stock`);

            return;
        }
        console.log(`Selecciono ${count} items`);
    }
    //----------------------------------------

  return (
    <div className='ItemCount'>
        <button onClick={decrementHandler}>-</button>
        <span>{count}</span>
        <button onClick={incrementHandler}>+</button>

        <button onClick={onAddHandler}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount;
