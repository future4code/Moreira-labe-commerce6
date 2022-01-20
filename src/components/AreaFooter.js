import React from 'react';
import styled from 'styled-components';
import {MdFavoriteBorder} from "react-icons/md";

const Footer = styled.footer`
  background-color: black;
  height: 60px;
  bottom: 0px;
`;

const Coracao =styled.span`
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem;

`;
const Ul =styled.ul`
  display:flex;
  margin: 5%;
  text-decoration: none;
  list-style-type: none;
  .li{
    text-decoration: none;

  }
`;

class AreaFooter extends React.Component{
  render(){
    return (
  
    <Footer>
      <Ul>
              <li><Coracao><a herf="http://fluttering-coast.surge.sh/"><MdFavoriteBorder/></a></Coracao></li>
              <li> fjhoidashfpsdo </li>
      </Ul>
  
    </Footer>

    )
  }
  
}

export default AreaFooter;
