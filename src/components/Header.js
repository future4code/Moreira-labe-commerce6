import React from 'react';
import styled from 'styled-components'
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";





const Header = styled.header`
  background-image: linear-gradient(to right, #00BFFF , #00FA9A, #0000FF);
  display:flex;
  justify-content: space-between;
  height: 4rem;
  align-items: center;
  padding: 0px 10px;
  color: white;
  position: fixed;
  width: 100%;
  z-index: 2;
    .campoBusca {
    border: 0 none;
    padding: 5px 5px;
    outline: 0;
    border-radius: 3px;
    width: 500px;
    border: none;
    }
`;

const Lupa = styled.span`
  color: #C0C0C0;
  font-size: 1.5em;
  position: relative;
  right: 20%;
  margin-top: 0.5%;
`
const Sacola = styled.span`
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem;
  
`
const Coracao = styled.span`
  color: white;
  font-size: 1.5rem;
  padding: 2.0rem;
  `

const Pessoa = styled.span`
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem;

`
const Ul = styled.ul`
  display:flex;
  margin: 5%;
  text-decoration: none;
  list-style-type: none;
  .li{
    text-decoration: none;

  }
`
const Button = styled.button`
    background-color: transparent;
    border:none;
    transition: 0.2s ease;
    align-self: center;
    cursor: pointer;
    transition: transform 0.5s;
        :hover{
        transform: scale(1.3);
      }
`




function AreaHeader(props) {

  return (
    <div>
      <Header>
        <h3>Astrocad</h3>

        <input type="text"
          value={props.buscaNome}
          onChange={props.onChangeBuscaNome}
          placeholder='Buscar produtos'
        />

        <Lupa><MdSearch /></Lupa>
       
        <Ul>
          <li><Button><Coracao><MdFavoriteBorder /></Coracao></Button></li>
          <li> <Pessoa><IoPersonOutline /></Pessoa> </li>
          <li> <Sacola><MdOutlineShoppingBag /></Sacola> </li>
        </Ul>
      </Header>

    </div>


  )
}

export default AreaHeader;