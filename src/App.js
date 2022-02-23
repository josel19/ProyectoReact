import React, { Component } from 'react';
import Buscador from './Componentes/Buscador';
import Resultado from './Componentes/Resultado';
class App extends Component {
 
  state = {
    termino: '',
    imagenes : [],
    pagina:''
  }

  paginaAnterior = () =>{
    let pagina = this.state.pagina;
    if(pagina === 1) return null;
    pagina-=1;
    this.setState({pagina},()=>{
      this.consultarApi();
    });
  }
  paginaSiguiente = () =>{
    let pagina = this.state.pagina;
    pagina+=1;
    this.setState({pagina}, ()=>{
      this.consultarApi();
    });
  }


  consultarApi = () =>{
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=25838828-7a5ac27d64c7e99873e9e5729&q=${termino}&per_page=30&page=${pagina}`;
    //console.log(url);
     
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => this.setState({imagenes : resultado.hits}))
  }


  datosBusqueda = (termino) => {
    this.setState({
      termino : termino,
      pagina : 1
    }, ()=>{
      this.consultarApi();
    })
  }
  

  render() {
    return( 
      <div className="app container">
            <div className="jumbotron">
                <p className="lead text-center fs-1">Buscador de imagenes</p>
                <Buscador
                datosBusqueda={this.datosBusqueda}
                />
            </div>
            <div className="row justify-content-center">
                <Resultado
                  imagenes={this.state.imagenes}
                  paginaSiguiente={this.paginaSiguiente}
                  paginaAnterior={this.paginaAnterior}
                />
            </div>
      </div>
    )
  }
}

export default App;
