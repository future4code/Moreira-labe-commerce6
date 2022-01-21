import React from 'react';
import styled from 'styled-components';





class filtroProduto extends React.Component {
  state = {
    cestaProdutos: [{
      id: 1,
      name: "Foguete da Missão Apollo 11",
      value: 10000.0,
      imageUrl: "https://picsum.photos/200/200"
    },
    {
      id: 2,
      name: "Foguete da Missão Apollo 12",
      value: 20000.0,
      imageUrl: "https://picsum.photos/200/200"
    }
    ],
    precoMin: '',
    precoMax: '',
    buscaNome: ''
  };

  onChangePrecoMax = (event) => {
    this.setState({ precoMax: event.target.value })

  };

  onChangePrecoMin = (event) => {
    this.setState({ precoMin: event.target.value })

  };

  onChangeBuscaNome = (event) => {
    this.setState({ buscaNome: event.target.value })

  };

  render() {
    return (
      <filtroProduto>

        <nav>

          <h3>Filtros</h3>

          <div>
            <p>Valor mínimo:</p>

            <input
              value={this.state.precoMin}
              onChange={this.onChangePrecoMin}
            />

          </div>

          <div>
            <p>Valor máximo:</p>

            <input
              value={this.state.precoMax}
              onChange={this.onChangePrecoMax}
            />
          </div>

          <div>
            <p>Busca por nome:</p>

            <input
              value={this.state.buscaNome}
              onChange={this.onChangeBuscaNome}
            />
          </div>
        </nav>

      </filtroProduto>

    )
  }
}

export default filtroProduto;