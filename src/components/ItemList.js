import React, { useState, useEffect } from 'react';
import Item from './Item';
import './ItemList.css';


const ItemList = ({products}) => {

    return (
        <div className='ItemList'>
            {products.map(p => <Item product={p}/>)}
        </div>
    )
}

export default ItemList