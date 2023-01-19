import React, { Component } from 'react';

class ClassComponent extends Component {

    render() {
        return(
            <div>
                Hola soy un componente de: {this.props.nombre}
            </div>
        )

    }

}

export default ClassComponent;