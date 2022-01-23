import React from 'react';
import styled from 'styled-components';



const ContainerDiv = styled.div`
  display: flex;

  background-color:white;


 
  
`
  const Texto = styled.p`
    font-weight: bold;
    left: 1.8em;
`

const Input = styled.input `
  border: none;
  border-bottom: 1px solid;
  margin: 0.5em;
`

function filtroProduto (props) {
   

  return (
      <ContainerDiv >
        <div>
          <Texto >Valor mínimo:</Texto >

          <Input 
          type ="number"
          value={props.precoMin}
          onChange={props.onChangePrecoMin}
          placeholder="R$"
          />
        </div>

        <div>
          <Texto >Valor máximo:</Texto >

          <Input 
          type ="number"
          value={props.precoMax}
          onChange={props.onChangePrecoMax}
          placeholder="R$"
          />
        </div>
      </ContainerDiv >
    )
  }

export default filtroProduto;