import styled from 'styled-components'


export const Header = styled.div`

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
      border-radius: 5px;
      width: 20em;
      border: none;
      position: absolute;
      left: 10%;
      }

          .Lupa {
            color: #C0C0C0;
            font-size: 1.5em;
            position: absolute;
            right: 109%;
            margin-top: 0.5%;
          }
                Ul {
                display:flex;
                margin: 5%;
                text-decoration: none;
                list-style-type: none;
                .li{
                  text-decoration: none;
                }}

                    Input{
                      width: 50%;
                    }
                       a{
                         text-decoration: none;
                         color: white;
                         &:hover {
                           color: #00FA9A;
                         }
                       }
`;