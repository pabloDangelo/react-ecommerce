
// Las props llegan como objeto por lo tanto podemos desestructurar de la siguiente forma:
// const FunctionComponent = ({prop1, prop2, prop3, etc}) =>{ }
const FunctionComponent = ({nombre}) =>{
    return(
        <div>
            Hola soy un componente de: {nombre}
        </div>
    )
}

export default FunctionComponent;

/* 

    Con export default decimos que lo exportado es lo mas importante o unico
    y lo importamos luego asi:
    import FunctionComponent from './Components/FunctionComponent';

    Con export solo exportamos de a uno varios bloques del js
    y lo importamos luego asi:
    import {FunctionComponent, ..., ...} from './Components/FunctionComponent';



*/