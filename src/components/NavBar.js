import './NavBar.css';
import CartWidget from "./CartWidget";

function NavBar(props) {
    
    let listItems = props.items.map(item => <li>{ item }</li>);

    return (
        <ul className='nav-bar'>
            <li><CartWidget /></li>
            { listItems }
        </ul>
    );
}

export default NavBar;