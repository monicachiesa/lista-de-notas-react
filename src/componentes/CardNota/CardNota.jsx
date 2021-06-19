import React, { Component } from "react";
import "./estilo.css"

class cardNota extends Component {
  render() {

    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>  { /* recebe o texto de titulo */}
        </header>
        <p className="card-nota_texto">{this.props.text}</p> { /* recebe o texto de anotação */}
      </section>
    );

  }
}
export default cardNota;