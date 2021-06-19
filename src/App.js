import React, { Component } from "react";
import ListaDeNotas from "./componentes/ListaDeNotas";
import FormularioCadastro from "./componentes/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {

constructor(){
super();
  this.notas = [];
  this.state = {
    notas:[] //passa um array vazio de notas
  };
}


criarNota(titulo, texto) {
  const novaNota = {titulo, texto}; //cria um objeto
  const novoArrayNotas = [...this.state.notas, novaNota] //cria novo array
  const novoEstado = {
    notas:novoArrayNotas
  }

this.setState(novoEstado)
}


  render() {
    return (
      
      <section className="conteudo">
        
        <FormularioCadastro criarNota = {this.criarNota.bind(this)}/> 
        <ListaDeNotas notas={this.state.notas}/>    { /* torna o número de notas dinâmico */ }
      </section>
    );
  }
}

export default App;