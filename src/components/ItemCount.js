
import './ItemCount.css';
import InputNumber from './InputNumber';
import Button from './Button';
import { useState } from 'react';

function ItemCount(props){

    const [stock, setStock] = useState(props.stock);

    const onAdd = (number) => {

    }

    return(
        <div className='item-count'>
            <InputNumber initial={props.initial} max={props.stock} />
            <Button onClick={onAdd} className={'count-button'} name='Agregar al carrito' />
        </div>
    );

}

export default ItemCount;