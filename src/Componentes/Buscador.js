import React, { Component } from 'react';


class Buscador extends Component {

    busquedaReft = React.createRef();

    obtenerDatos = (e) =>{
        e.preventDefault();
        //Se toma el valor del input
        const termino = this.busquedaReft.current.value;
        //se envia al componente principal/padre
        this.props.datosBusqueda(termino);
    }

    render() { 
        return (
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaReft} type="text" className="form-control form-control-lg" placeholder="Busca una imagen..."/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar"/>
                    </div>
                </div>
            </form>
        );
    }
}
 
export default Buscador;