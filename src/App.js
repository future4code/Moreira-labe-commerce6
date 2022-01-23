import React from "react";
import './App.css';
import Produto from "./components/Produtos";
import Filters from "./components/Filters";
import styled from "styled-components";
import Header from "./components/Header";
import FotoCapaPraia from './imagens/FotoCapaPraia.png';
import AreaFooter from './components/AreaFooter';
import { Sacola } from './components/Sacola';
import Filtro from './components/Filtro';



//Array fora da função para melhor organização
const listaDeProdutos = [
  {
    id: 1,
    nome: "Camiseta branca estampada",
    valor: 59.95,
    foto: "https://img.ltwebstatic.com/images3_pi/2021/12/07/1638840920931be5d41b4a98e30f689a6cb8efc4bd_thumbnail_600x.webp",
    quantidade: 1
  },
  {
    id: 2,
    nome: "Camiseta cinza Planeta",
    valor: 69.99,
    foto: "https://img.ltwebstatic.com/images3_pi/2021/11/19/16373003925c20a8eec6501d826effbea514f2f11d_thumbnail_600x.webp",
    quantidade: 1
  },
  {
    id: 3,
    nome: "Camiseta preta Fases da Lua",
    valor: 69.99,
    foto: "https://img.ltwebstatic.com/images3_pi/2021/08/16/1629113857d9594dee1aea2c8e1cc692e2399fc8cb_thumbnail_600x.webp",
    quantidade: 1
  },
  {
    id: 4,
    nome: "Camiseta preta Astronautinhas",
    valor: 59.99,
    foto: "https://img.ltwebstatic.com/images3_pi/2020/11/09/16048789577e0abd8329299afeedbdcc0697e7d4b6_thumbnail_600x.webp",
    quantidade: 1
  },
  {
    id: 5,
    nome: "Camiseta preta Planetas",
    valor: 89.99,
    foto: "https://img.ltwebstatic.com/images3_pi/2020/12/07/1607323576f2b0a27521b467b122b1f73252f13be3_thumbnail_600x.webp",
    quantidade: 1
  },
  {
    id: 6,
    nome: "Camiseta azul Atronauta",
    valor: 95.99,
    foto: "https://img.ltwebstatic.com/images3_pi/2021/04/25/16193208009c822eb33b3f89767be5a3cc01026422_thumbnail_600x.webp",
    quantidade: 1
  },
  {
    id: 7,
    nome: "Camiseta black Fibonacci",
    valor: 99.99,
    foto: "https://static3.tcdn.com.br/img/img_prod/497460/camiseta_fibonacci_1071_1_93222fe8e3b3c95062bc6fdf95a2896e.jpg",
    quantidade: 1
  },
  {
    id: 8,
    nome: "Camisa roxa plantas",
    valor: 89.99,
    foto: "https://i.pinimg.com/236x/db/34/7b/db347b59748d25d0c105d0a536712f26.jpg",
    quantidade: 1
  },
];

//      Estilização CSS 
const InfoProdutos = styled.div`
    position: relative;
    display: flex;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-around;
`

const ProdutosContainer = styled.div`
    display: grid;
    position: relative;
    margin-top: 2em;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
`

const AreaCapa = styled.div`
  display: block;
  margin-bottom: -2.5em;
`

const Botao = styled.button `
    position: relative;
    left: 30em;
    bottom: 10em;
    border-radius: 0.8em;
    background-color: #c83e3b;
    color: white;
    transition: 0.2s ease;
    align-self: center;
    padding: 0.5em;
    font-size: 2em;
    cursor: pointer;
    font-weight: bold;
    transition: transform 0.5s;
        :hover{
        background-color: #ff1616;
        transform: scale(1.3);
      }
      :active{
        background-color: #c83e3b;
      }
`

const Quantidade = styled.p`
  
  font-weight: bold;
  
`

const Details =styled.details`
  position: relative;
  
  top: 1em;
  `

//Main function
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      produtos: listaDeProdutos,
      ordenacao: -1,
      produtosDentroDaSacola: [],
      precoMin: '',
      precoMax: '',
      buscaNome: ''
    };
  }

  //Minor functions

  onChangeOrdenacao = (event) => {
    this.setState({ ordenacao: event.target.value });
  }

  onChangePrecoMax = (event) => {
    this.setState({ precoMax: event.target.value })
  };

  onChangePrecoMin = (event) => {
    this.setState({ precoMin: event.target.value })
  };

  onChangeBuscaNome = (event) => {
    this.setState({ buscaNome: event.target.value })
  };

  adicionaProdutoNaSacola = novoProdutoParaAdicionar => {
    this.setState(state => {
      const newState = JSON.parse(JSON.stringify(state));
      const posicaoDoProdutoDentroDaSacola = newState.produtosDentroDaSacola.findIndex(produtoNaSacola => {
        return produtoNaSacola.id === novoProdutoParaAdicionar.id
      });
      if (posicaoDoProdutoDentroDaSacola !== -1) {
        newState.produtosDentroDaSacola[posicaoDoProdutoDentroDaSacola].quantidade++;
      }
      else {
        newState.produtosDentroDaSacola.push(novoProdutoParaAdicionar);
      }
      return newState;
    });
  }

  removeProdutoDaSacola = idDoProdutoParaRemover => {
    this.setState(state => {
      const newState = JSON.parse(JSON.stringify(state));
      const posicaoDoProdutoDentroDaSacola = newState.produtosDentroDaSacola.findIndex(produtoNaSacola => {
        return produtoNaSacola.id === idDoProdutoParaRemover
      });
      if (posicaoDoProdutoDentroDaSacola !== -1) {
        newState.produtosDentroDaSacola.splice(posicaoDoProdutoDentroDaSacola, 1);
      }
      return newState;
    })
  }

  render() {
    const filtroUsuario = this.state.produtos.filter((produto) => {
      return produto.nome.toLowerCase().includes(this.state.buscaNome.toLowerCase())
    })
      .filter((produto) => {
        return this.state.precoMin === "" || produto.valor >= this.state.precoMin
      })
      .filter((produto) => {
        return this.state.precoMax === "" || produto.valor <= this.state.precoMax
      })
      .sort((prod, proxProd) => {
        if (prod.valor < proxProd.valor) {
          return 1 * this.state.ordenacao
        }
        else {
          return -1 * this.state.ordenacao
        }
      })
      .map((p) => {
        return (
          <Produto
            key={'chave-produto-' + p.id}
            adicionaProdutoNaSacola={this.adicionaProdutoNaSacola}
            produto={p}
          />
        )
      })

    return (
      <div>
        < Header
          buscaNome={this.state.buscaNome}
          onChangeBuscaNome={this.onChangeBuscaNome}
        />
        <AreaCapa>
          <img className="fotoCapa" src={FotoCapaPraia}  />
          <Botao>Aproveite Agora</Botao>
        </AreaCapa>
        <InfoProdutos>
              <Filtro
                precoMin={this.state.precoMin}
                precoMax={this.state.precoMax}
                onChangePrecoMin={this.onChangePrecoMin}
                onChangePrecoMax={this.onChangePrecoMax}                
              />
              <Quantidade>Quantidade: {filtroUsuario.length}</Quantidade>
              <Details>
                <Sacola
                  produtosDentroDaSacola={this.state.produtosDentroDaSacola}
                  removeProdutoDaSacola={this.removeProdutoDaSacola}
                />
              </Details>
              <Filters
              ordenacao={this.state.ordenacao}
              onChangeOrdenacao={this.onChangeOrdenacao}
              />
        </InfoProdutos>
        
        <ProdutosContainer>
          {filtroUsuario}
        </ProdutosContainer>

        <AreaFooter />
      </div>
    );
  }
}

export default App;
