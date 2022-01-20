import React from "react";
import './App.css';
import Produto from "./components/Produtos";
import Filters from "./components/Filters";
import styled from "styled-components";
import Header from "./components/Header";
import FotoCapaPraia from './imagens/FotoCapaPraia.png';
import AreaFooter from './components/AreaFooter';
import {Sacola} from './components/Sacola';


const sacolaProdutos = [
  {
    id: 1,
    nome: "Camiseta Braca estampada",
    valor: 59.95,
    foto: "https://img.ltwebstatic.com/images3_pi/2021/12/07/1638840920931be5d41b4a98e30f689a6cb8efc4bd_thumbnail_600x.webp",
    quantidade: 0
  },
  {
    id: 2,
    nome: "Camiseta Cinza Planeta",
    valor: 69.99,
    foto: "https://img.ltwebstatic.com/images3_pi/2021/11/19/16373003925c20a8eec6501d826effbea514f2f11d_thumbnail_600x.webp",
    quantidade: 0
  },
  {
    id: 3,
    nome: "Camiseta Preta Fases da Lua",
    valor: 69.99,
    foto: "https://img.ltwebstatic.com/images3_pi/2021/08/16/1629113857d9594dee1aea2c8e1cc692e2399fc8cb_thumbnail_600x.webp",
    quantidade: 0
  },
  {
    id: 4,
    nome: "Camiseta Preta Astronaltinhas",
    valor: 59.99,
    foto: "https://img.ltwebstatic.com/images3_pi/2020/11/09/16048789577e0abd8329299afeedbdcc0697e7d4b6_thumbnail_600x.webp",
    quantidade: 0
  },
  {
    id: 5,
    nome: "Camiseta Preta Planetas",
    valor: 89.99,
    foto: "https://img.ltwebstatic.com/images3_pi/2020/12/07/1607323576f2b0a27521b467b122b1f73252f13be3_thumbnail_600x.webp",
    quantidade: 0
  },
  {
    id: 6,
    nome: "Camiseta Azul Atronauta",
    valor: 95.99,
    foto: "https://img.ltwebstatic.com/images3_pi/2021/04/25/16193208009c822eb33b3f89767be5a3cc01026422_thumbnail_600x.webp",
    quantidade: 0
  },
  {
    id: 7,
    nome: "Camiseta Black Fibonacci",
    valor: 99.99,
    foto: "https://static3.tcdn.com.br/img/img_prod/497460/camiseta_fibonacci_1071_1_93222fe8e3b3c95062bc6fdf95a2896e.jpg",
    quantidade: 0
  }, 
  {
    id: 8,
    nome: "Camisa roxa plantas",
    valor: 89.99,
    foto: "https://static.dafiti.com.br/p/Hering-Kids-Camiseta-Hering-Kids-Infantil-Planetas-Roxa-0750-3143566-1-zoom.jpg",
    quantidade: 0
  },
];


const InfoProdutos = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    padding: 2em;
`

const ProdutosContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    padding: 16px;
`

class App extends React.Component {
  state = {
    produtos: sacolaProdutos,
    ordenacao: 1,
  };

  onChangeOrdenacao = (event) => {

    this.setState({ ordenacao: event.target.value })
  }

  render() {
    const listaProdutos = this.state.produtos.map((p) => {
      return (
        <Produto key={p.id}
          nomeProduto={p.nome}
          valorProduto={p.valor}
          fotoProduto={p.foto}
        />
      )
    })

    this.state.produtos.sort((prod, proxProd) => {
        return this.state.ordenacao * (prod.valor - proxProd.valor)
    })
    
    return (
      <div>
        <Header/>
        <div>
          <img className="fotoCapa" src={FotoCapaPraia}/>
        </div>

        

        <InfoProdutos>
          <p>Quantidade de Produtos: {listaProdutos.length}</p>

          <Filters
          ordenacao = {this.ordenacao}
          onChangeOrdenacao = {this.onChangeOrdenacao}
          />
        </InfoProdutos>

        <ProdutosContainer>
          {listaProdutos}
        </ProdutosContainer>
        <Sacola/>
       <AreaFooter/>
      </div>
    );
  }
}

export default App;
