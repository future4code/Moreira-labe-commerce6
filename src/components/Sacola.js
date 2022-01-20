import React from 'react';
import Styled from 'styled-components';

const ContainerSacola = Styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 16px;
`

const InfoGeralSacola = Styled.section`
  border: 1px solid black;
  width: 300px;
  padding: 10px;
  font-family: arial;
`

const ListaProdutos = Styled.section`
  display: grid;
  gap: 10px;
  text-align: left;
`

const CadaProduto = Styled.section`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
  font-family: arial;
  
  .QuantidadeNomeProdutos{
    margin: 0;
    font-style: bold;
  }

  .BotaoRemover{
    width: 80px;
    border: 2px solid gray;
    border-radius: 5px;
    font-family: arial;
    :hover{border: 2px solid black};
    :active{background-color: white};
  }
`

export class Sacola extends React.Component {

    state = {
        sacolaProdutos: [
            {
                id: 4,
                nome: 'Camiseta Mundo da Lua',
                preco: 10.55,
                quantidade: 4
            },
            {
                id: 3,
                nome: 'Camiseta Anéis de Plutão',
                preco: 90.45,
                quantidade: 3
            }
        ]
    }

    valorTotal = () => {
        let total = 0;

        for (let item of this.state.sacolaProdutos) {
            total = total + item.preco * item.quantidade
        }
        return total.toFixed(2)
    }

    removeProduto = (idProduto) => {
        const novaSacolaProdutos = this.state.sacolaProdutos.map((produto) => {
            if (produto.id === idProduto){
                return {
                    ...produto,
                    quantidade: produto.quantidade - 1
                }
            }
            return produto
        })

    this.setState({sacolaProdutos: novaSacolaProdutos.filter((produto) => produto.quantidade >= 1)})
        }

    render() {
        return (
            <ContainerSacola>
                <InfoGeralSacola>
                    <h3>Sacola:</h3>
                    <p>Total: R$ {this.valorTotal()}</p>
                    <ListaProdutos>
                        {this.state.sacolaProdutos.map((produto) => {
                            return <CadaProduto>
                                <p className='QuantidadeNomeProdutos'>{produto.quantidade} {produto.nome}</p>
                                <button className='BotaoRemover' onClick={() => this.removeProduto
                                    (produto.id)}>
                                    Remover
                                </button>
                            </CadaProduto>
                        })}
                    </ListaProdutos>
                </InfoGeralSacola>
            </ContainerSacola>
        )
    }
}