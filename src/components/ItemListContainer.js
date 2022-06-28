import './ItemListContainer.css';

function ItemListContainer(props) {

    return(
       <ul className='item-list-conatiner'>
        <li>{props.greeting}</li>
        {props.items.map(item => <li className='item'>{ item }</li>)}
       </ul> 
    );

}

export default ItemListContainer;