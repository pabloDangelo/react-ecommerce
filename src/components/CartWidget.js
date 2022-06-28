import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CartWidget(props) {

    return (
        <>
            {/* No funciona */}
            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> 
            
            <label>♣</label>
        </>
    );

}

export default CartWidget;