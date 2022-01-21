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

    /**
     * A lista de produtos dentro da sacola `produtosDentroDaSacola`
     * não precisa ser definida no state do componente, pois já está vindo 
     * para o componente através dos `props` 
     */
    constructor(props) {
        super(props);
    }

    valorTotal = () => {
        let total = 0;
        for (let item of this.props.produtosDentroDaSacola) {
            total = total + item.valor * item.quantidade
        }
        return total.toFixed(2)
    }

    render() {
        return (
            <ContainerSacola>
                <InfoGeralSacola>
                    <h3>Sacola:</h3>
                    <p>Total: R$ {this.valorTotal()}</p>
                    <ListaProdutos>
                        {this.props.produtosDentroDaSacola.map((produto, index) => {
                            return <CadaProduto key={'produto-chave-'+index}>
                                <p className='QuantidadeNomeProdutos'>{produto.quantidade} {produto.nome}</p>
                                <button 
                                    className='BotaoRemover' 
                                    onClick={() => this.props.removeProdutoDaSacola(produto.id)}
                                >
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