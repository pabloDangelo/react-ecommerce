import './InputNumber.css';

function InputNumber(props) {

    return(
        <input type="number" step="1" min="1" max={props.max} value={props.initial}/>
    );

}

export default InputNumber;