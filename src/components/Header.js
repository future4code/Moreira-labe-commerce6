import React from 'react';
import styled from 'styled-components'
import {MdOutlineShoppingBag} from "react-icons/md";
import {MdSearch} from "react-icons/md";
import {MdFavoriteBorder} from "react-icons/md";
import {IoPersonOutline} from "react-icons/io5";

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
  
    .campoBusca {
    border: 0 none;
    padding: 5px 5px;
    outline: 0;
    border-radius: 3px;
    width: 500px;
    }
`;

const Lupa =styled.span`
  color: #C0C0C0;
  font-size: 1.5em;
  position: relative;
  right: 20%;
  margin-top: 0.5%;
`
const Sacola =styled.span`
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem;
  
`
const Coracao =styled.span`
  color: white;
  font-size: 1.5rem;
  padding: 2.0rem;
  `

const Pessoa =styled.span`
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem;

`
const Ul =styled.ul`
  display:flex;
  margin: 5%;
  text-decoration: none;
  list-style-type: none;
  .li{
    text-decoration: none;

  }
`


class AreaHeader extends React.Component {

    


  render() {
    return (
      <div>
      
        <Header>
          <h3>Astrocad</h3>
          <input type="text" class="campoBusca" placeholder="Buscar Produtos"/>
          <Lupa><MdSearch/></Lupa>
          <Ul>
            <li><Coracao><MdFavoriteBorder/></Coracao></li>
            <li> <Pessoa><IoPersonOutline/></Pessoa> </li>
            <li> <Sacola><MdOutlineShoppingBag/></Sacola> </li>
          </Ul>
        </Header>

    </div>
    
      
    )
  }
}
export default AreaHeader;