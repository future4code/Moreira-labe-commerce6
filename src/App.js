import React from 'react';
import './App.css';
import GifPromo from './imagens/FotoCapaPraia.png';
import ContainerHeader from './components/Header/index';


function App() {
  return (
    <div className="App">
      <ContainerHeader/>
      <div>

        <img className="fotoCapa" src={GifPromo}/>

      </div>
      
      <main>
        
          <nav>
            ... menu
            campos de busca
            carrinho
            logo
            masculino
            feminino
            login

          </nav>
          <div>
            imagem de abertura ou slideshow smartmockups
          </div>

          <div>
            <section>
              card produtos
            </section>
          </div>
              # 109f83
              # 0b8bf0
            # 0b90d0
            # 0d97ac
            #  15aa53
          </main>

         <footer className="footer">
            redes sociais 
            whats
            email
            endereço
            ....
      </footer>
    </div>
  );
}

export default App;
