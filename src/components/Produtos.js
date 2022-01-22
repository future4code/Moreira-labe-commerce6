import React from "react";
import styled from "styled-components";



const ProdutoContainer = styled.div`
  width: 100%;
  margin-bottom: 50px;
  
`

const FotoProduto = styled.img`
  width: 100%;
`

const Preco = styled.p`
  color:green;
  font-size: 1.5em;
  font-weight: bold;
  margin: 0;
`

const NomeProduto = styled.p`
  color:black;
  font-size: 0.5;
  margin: 0;
`

const Promo = styled.p`
  color:red;
  font-size: 0.5;
  margin: 0;
  text-decoration: line-through;
`

const Botao = styled.button `
    margin-top: 0.5em;
    border: 1px solid;
    border-radius: 0.8em;
    background-color: #00BFFF;
    color: white;
    transition: 0.2s ease;
    align-self: center;
    padding: 0.4rem;
    font-size: 0.8em;
    cursor: pointer;
    font-weight: bold;
      :hover{
        background-color: #0000FF;
      }
      :active{
        background-color: #00BFFF;
      }
`

class Produto extends React.Component {

  // nunca esquecer de inicalizar os props dentro do constructor
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <ProdutoContainer >

        <a><FotoProduto src={this.props.produto.foto} alt="Imagem do produto" /></a>
        <NomeProduto>{this.props.produto.nome}</NomeProduto>
        <Preco>R${this.props.produto.valor}</Preco>



        <Botao
          className='BotaoAdicionar' 
          onClick={() => this.props.adicionaProdutoNaSacola(this.props.produto)}
        >Adicionar na Sacola </Botao>

      </ProdutoContainer>
    );
  }
}

export default Produto;