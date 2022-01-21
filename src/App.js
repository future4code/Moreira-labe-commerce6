import React from "react";
import './App.css';
import Produto from "./components/Produtos";
import Filters from "./components/Filters";
import styled from "styled-components";
import Header from "./components/Header";
import FotoCapaPraia from './imagens/FotoCapaPraia.png';
import AreaFooter from './components/AreaFooter';
import {Sacola} from './components/Sacola';
import Filtro from './components/Filtro';
/**
 * Acho que essa constante poderia se chamar listaDeProdutos, porque na verdade aqui não é a sacola,
 * aqui é a lista da qual o usuário escolhe produtos para adicionar na sacola. A sacola à princípio inicia vazia
 * e não com todos os produtos já dentro dela.
 */
const listaDeProdutos = [
  {
    id: 1,
    nome: "Camiseta Braca estampada",
    valor: 59.95,
    foto: "https://img.ltwebstatic.com/images3_pi/2021/12/07/1638840920931be5d41b4a98e30f689a6cb8efc4bd_thumbnail_600x.webp",
    quantidade: 1
  },
  {
    id: 2,
    nome: "Camiseta Cinza Planeta",
    valor: 69.99,
    foto: "https://img.ltwebstatic.com/images3_pi/2021/11/19/16373003925c20a8eec6501d826effbea514f2f11d_thumbnail_600x.webp",
    quantidade: 1
  },
  {
    id: 3,
    nome: "Camiseta Preta Fases da Lua",
    valor: 69.99,
    foto: "https://img.ltwebstatic.com/images3_pi/2021/08/16/1629113857d9594dee1aea2c8e1cc692e2399fc8cb_thumbnail_600x.webp",
    quantidade: 1
  },
  {
    id: 4,
    nome: "Camiseta Preta Astronaltinhas",
    valor: 59.99,
    foto: "https://img.ltwebstatic.com/images3_pi/2020/11/09/16048789577e0abd8329299afeedbdcc0697e7d4b6_thumbnail_600x.webp",
    quantidade: 1
  },
  {
    id: 5,
    nome: "Camiseta Preta Planetas",
    valor: 89.99,
    foto: "https://img.ltwebstatic.com/images3_pi/2020/12/07/1607323576f2b0a27521b467b122b1f73252f13be3_thumbnail_600x.webp",
    quantidade: 1
  },
  {
    id: 6,
    nome: "Camiseta Azul Atronauta",
    valor: 95.99,
    foto: "https://img.ltwebstatic.com/images3_pi/2021/04/25/16193208009c822eb33b3f89767be5a3cc01026422_thumbnail_600x.webp",
    quantidade: 1
  },
  {
    id: 7,
    nome: "Camiseta Black Fibonacci",
    valor: 99.99,
    foto: "https://static3.tcdn.com.br/img/img_prod/497460/camiseta_fibonacci_1071_1_93222fe8e3b3c95062bc6fdf95a2896e.jpg",
    quantidade: 1
  }, 
  {
    id: 8,
    nome: "Camisa roxa plantas",
    valor: 89.99,
    foto: "https://static.dafiti.com.br/p/Hering-Kids-Camiseta-Hering-Kids-Infantil-Planetas-Roxa-0750-3143566-1-zoom.jpg",
    quantidade: 1
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
      precoMax:'',
      buscaNome:''
    };
  }
  
  onChangeOrdenacao = (event) => {
    this.setState({ ordenacao: event.target.value });
  }

  onChangePrecoMax = (event) => {
    this.setState({precoMax: event.target.value})

  };

  onChangePrecoMin = (event)=> {
    this.setState({precoMin: event.target.value})

  };

  onChangeBuscaNome = (event)=> {
    this.setState({buscaNome: event.target.value})

  };

  produtosDoFiltro = () =>{
    const ProdutosFiltrados = this.state.listaDeProdutos.filter((valor) =>
      {
        if(valor > this.precoMin){
        return true
      }
      else {
        return false
      }
    }).filter((valor) =>
      {
        if(valor < this.precoMax){
        return true
      }
      else {
        return false
      }
    })
    const novaListaDeProdutosFiltrados = [...this.state.listaDeProdutos, ProdutosFiltrados]

    this.setState({listaDeProdutos: novaListaDeProdutosFiltrados})
  }

  produtosDoFiltroNome = () =>{
    const ProdutosFiltradosPorNome = this.state.listaDeProdutos.filter((nome) =>
      {
        if(nome.valor.includes(this.nome)){
        return true
      }
      else {
        return false
      }
    })
    this.setState({listaDeProdutos: ProdutosFiltradosPorNome})
  }
  

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
        </div>
        <InfoProdutos>
          <p>Quantidade de Produtos: {listaProdutos.length}</p>
          <Filters
            ordenacao={this.ordenacao}
            onChangeOrdenacao={this.onChangeOrdenacao}
          />
        </InfoProdutos>
        <ProdutosContainer>
          {listaProdutos}
          
        </ProdutosContainer>
        <Sacola 
          // passamos as variáveis do estado do componente pai na forma de `props`
          // para o componente filho
          produtosDentroDaSacola={this.state.produtosDentroDaSacola}
          removeProdutoDaSacola={this.removeProdutoDaSacola}
        />
        <div>
          
         <Filtro
          precoMin = {this.state.precoMin}
          precoMax = {this.state.precoMax}
          buscaNome = {this.state.buscaNome}
          onChangePrecoMin = {this.onChangePrecoMin}
          onChangePrecoMax = {this. onChangePrecoMax}
          onChangeBuscaNome = {this. onChangeBuscaNome}
          />     
         </div>    
       <AreaFooter/>
      </div>
    );
  }
}

export default App;
