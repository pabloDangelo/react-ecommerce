import React from 'react'
import './Item.css'
import ItemCount from './ItemCount';


export const Item = ({product}) => {
  return (
    <div className='Item' key={product.id}>
        {product.title}
        <img src="{product.image}" alt="{product.title}"/>
        Categoria: {product.category}
        <ItemCount stock={0}/>
    </div>
  )
}

export default Item;