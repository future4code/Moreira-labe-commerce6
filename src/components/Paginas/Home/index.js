import React from 'react';
import { ContainerPage, TitlePage } from '../../components/Main';
import FotoCapaPraia from '../../imagens/FotoCapaPraia.png';
import styled from 'styled-components';
import Anima from '../../Anima'

const Botao = styled.button ` 
    position: absolute;
    left: 75%;
    bottom: 15%;
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

const DivProm = styled.div`
  position: absolute;
  left:35%;
  bottom: 35%;
`

const EtiquetaPromo = styled.div`
  position: absolute;
  left:38%;
  top: 109%;
`

const EtiquetaPromo2 = styled.div`
  position: absolute;
  left:63%;
  top: 109%;
`

const IMG = styled.img`
  width: 100%;
`

const Frete = styled.div`
  color: #00FA9A;
  background-color: black;
  font-size: 1em;
  padding: 0.5em;
  
`
const TextoFrete = styled.p`
  animation-duration: 25s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  @keyframes slidein {
  from {
    margin-left: 0%;
    width: 300%
  }

  to {
    margin-left: 100%;
    width: 100%;
  }
}
`
const Page = () => {
return (

  <ContainerPage>
    <TitlePage>Seja Bem-Vindo!</TitlePage>
              <div>
                <IMG className="fotoCapa" src={FotoCapaPraia}  />
              </div>
              <div>
                <Botao>Aproveite Agora</Botao>
              </div>
              <DivProm>
                <Anima/>
              </DivProm>
              <Frete><TextoFrete> Frete grátis acima de R$130 </TextoFrete></Frete>
  </ContainerPage>
);


}

export default Page;