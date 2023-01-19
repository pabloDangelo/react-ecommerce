import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Este efecto se ejecutará solo una vez después de que el componente se haya montado.

        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => {
                console.error(error);
            })
    }, []); 

    return(
        <div>
            {greeting}
            <ItemList products={products}/>
        </div>
    )
    
}

export default ItemListContainer;