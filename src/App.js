import React from "react";
import './App.css';
import Produto from "./components/Produtos";
import Filters from "./components/Filters";
import styled from "styled-components";
import Header from './components/Header';
import FotoCapaPraia from './imagens/FotoCapaPraia.png';
import AreaFooter from './components/AreaFooter';
import {Sacola} from './components/Sacola';
import AreaPromo from './components/AreaPromo';
import Filtro from './components/Filtro';

const listaDeProdutos = [
  {
    id: 1,
    nome: "Camiseta Branca",
    valor: 59.95,
    foto: "https://i.pinimg.com/236x/65/e6/98/65e698a4aea4dcf8afba471970c86c8b.jpg",
    quantidade: 0
  },
  {
    id: 2,
    nome: "Camiseta Rosa Planeta",
    valor: 69.99,
    foto: "https://i.pinimg.com/236x/6e/b0/db/6eb0dbaf292cb4873e52035b45bdf333.jpg",
    quantidade: 0
  },
  {
    id: 3,
    nome: "Camiseta Amerala",
    valor: 69.99,
    foto: "https://i.pinimg.com/736x/5d/b1/fe/5db1fed006a75d0260a988307b21c2cb.jpg",
    quantidade: 0
  },
  {
    id: 4,
    nome: "Camiseta Preta Planetas",
    valor: 59.99,
    foto: "https://img.ltwebstatic.com/images3_pi/2020/11/09/16048789577e0abd8329299afeedbdcc0697e7d4b6_thumbnail_600x.webp",
    quantidade: 0
  },
  {
    id: 5,
    nome: "Camiseta Preta e Branca",
    valor: 89.99,
    foto: "https://i.pinimg.com/236x/10/54/8c/10548c2dd04434907e7ce74450be9b70.jpg",
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
    nome: "Camiseta Nasa",
    valor: 99.99,
    foto: "https://i.pinimg.com/236x/a2/49/3f/a2493f313437fec59fd0da305b119342.jpg",
    quantidade: 0
  },
  {
    id: 8,
    nome: "Camisa Coração",
    valor: 89.99,
    foto: "https://i.pinimg.com/236x/db/34/7b/db347b59748d25d0c105d0a536712f26.jpg",
    quantidade: 0
  },
];

const ContainerProdutos = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5em;
    padding-right: 1em;
    margin-left: 15em;
    text-align: center;
    border-radius: 20px;
   `
const InfocoesProdutos = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    padding: 1em;
    text-align: center;
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
      :hover{
        background-color: #ff1616;
      }
      :active{
        background-color: #c83e3b;
      }
`

class App extends React.Component {

  /**
   * A definição do state dentro do componente deve ser sempre feita dentro do método
   * `constructor` da classe, usando sempre `this.state`
   * 
   * O método `constructor` de uma classe React sempre tem que receber um `props` e chamar
   * a função mágica `super(props)` para poder inicializar a classe corretamente, mesmo que o `props` 
   * não seja usado dentro da aplicação.
   */
  constructor(props) {
    super(props);
    this.state = {
      produtos: listaDeProdutos,
      ordenacao: -1,
      // vamos inicializar uma variável que representa os produtos adicionados na sacola
      produtosDentroDaSacola: [],

      precoMin: '',
      precoMax: '',
      buscaNome:''
    };
  }


  

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





  // Esse método será chamado por cada card de produto
  adicionaProdutoNaSacola = novoProdutoParaAdicionar => {

    this.setState(state => {

      // clonamos o estado original para manter a imutabilidade
      const newState = JSON.parse(JSON.stringify(state));

      // procuramos dentro da sacola, se esse produto já está lá, usando uma função que vai retornar
      // qual é a posição do produto dentro da array da sacola, comparando os `ids`. 
      // Se o produto não existir dentro da sacola essa função vai retornar -1
      const posicaoDoProdutoDentroDaSacola = newState.produtosDentroDaSacola.findIndex(produtoNaSacola => {
        return produtoNaSacola.id === novoProdutoParaAdicionar.id
      });

      // se o produto possuir uma posicao diferente de -1 significa que o produto já existe dentro 
      // da sacola
      if(posicaoDoProdutoDentroDaSacola !== -1) {
        // o produto já existe dentro da sacola, portanto apenas incrementamos a quantidade desse 
        // produto dentro da sacola
        newState.produtosDentroDaSacola[posicaoDoProdutoDentroDaSacola].quantidade++;
      }
      // se o produto não está na sacola ainda, vamos adicionar ele na sacola
      else {
        newState.produtosDentroDaSacola.push(novoProdutoParaAdicionar);
      }

      // retorna o estado atualizado
      return newState;
    });
  }

  // Esse método vamos passar por `props` para o componente da sacola
  // pois é dentro dele que vamos chamar esse método
  removeProdutoDaSacola = idDoProdutoParaRemover => {

    this.setState(state => {

      // clonamos o estado original para manter a imutabilidade
      const newState = JSON.parse(JSON.stringify(state));

      // procuramos novamente pela posição do produto dentro da array de produtos da sacola
      // se encontramos esse id, vamos remover o produto, se não encontramos então não fazemos nada
      const posicaoDoProdutoDentroDaSacola = newState.produtosDentroDaSacola.findIndex(produtoNaSacola => {
        return produtoNaSacola.id === idDoProdutoParaRemover
      });

      // se não for -1, significa que o produto está dentro da sacola, então removemos
      if(posicaoDoProdutoDentroDaSacola !== -1) {
        // Método que remove um item de uma array
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
        newState.produtosDentroDaSacola.splice(posicaoDoProdutoDentroDaSacola, 1);
      }

      // retorna o estado atualizado
      return newState;
    })
  }

  render() {

    const listaProdutos = this.state.produtos.map((p) => {
      return (
        <Produto 
          key={'chave-produto-'+p.id}
          adicionaProdutoNaSacola={this.adicionaProdutoNaSacola}
          produto={p}
          // key={p.id}
          // nomeProduto={p.nome}
          // valorProduto={p.valor}
          // fotoProduto={p.foto}
        />
      )
    }).sort((prod, proxProd) => {
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
      if(prod.valor > proxProd.valor) {
        return 1 * this.state.ordenacao
      }
      else {
        return -1 * this.state.ordenacao
      }
    });


    return (
      <div>
        <Header/>

        <div>
          <img className="fotoCapa" src={FotoCapaPraia}/>
          <Botao>Aproveite Agora</Botao>
        </div>
        <InfocoesProdutos>
          <p>Quantidade de Produtos: {listaProdutos.length}</p>
          <Filters
            ordenacao={this.ordenacao}
            onChangeOrdenacao={this.onChangeOrdenacao}
          />
        </InfocoesProdutos>

        <ContainerProdutos>
          {listaProdutos}
        </ContainerProdutos>
        <div>
          <AreaPromo/>
        </div>

        <Sacola 
          // passamos as variáveis do estado do componente pai na forma de `props`
          // para o componente filho
          produtosDentroDaSacola={this.state.produtosDentroDaSacola}
          removeProdutoDaSacola={this.removeProdutoDaSacola}
        />
        <Filtro
        precoMin = {this.state.onChangePrecoMin}
        precoMax = {this.state.onChangePrecoMax}
        buscaNome = {this.state.onChangeBuscaNome}
        
        />
       <AreaFooter/>
      </div>
    );
  }
}

export default App;