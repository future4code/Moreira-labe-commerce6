import React from 'react';

class filtroProduto extends React.Component {
 
  constructor(props) {
    super(props);
}
  render () {
    return (
      <div>

        <nav>

        <h3>Filtros</h3>

        <div>
          <p>Valor mínimo:</p>

          <input 
          type ="number"
          value={this.props.precoMin}
          onChange={this.props.onChangePrecoMin}
          placeholder="Valor"
          >{this.props.produtosDoFiltro}</input>

        </div>

        <div>
          <p>Valor máximo:</p>

          <input 
          type ="number"
          name ="nome"
          value={this.props.precoMax}
          onChange={this.props.onChangePrecoMax}
          placeholder="Valor"
          />
        </div>

        <div>
          <p>Filtrar por Produto:</p>

          <input
          type = "text"
          name='nome'
          value={this.props.buscaNome}
          onChange={this.props.onChangeBuscaNome}
          />
        </div>
        </nav>

      </div>

    )
  }
}
export default filtroProduto;