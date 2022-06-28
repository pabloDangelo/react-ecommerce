import './Button.css';

function Button(props) {

    return(
        <button className={props.className} onClick={props.clickEvent}>{props.name}</button>
    );

}

export default Button;