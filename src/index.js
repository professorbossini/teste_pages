import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import Cartao from './Cartao';
import Mensagem from './Mensagem';
import Botoes from './Botoes';

export default class App extends Component {
    render() {
    return (
        //grid conteúdo centralizado horizontalmente
      <div className='grid justify-content-center'>
        {/*12 colunas. 6 para telas grandes  */}
        <div className='col-12 lg:col-6'>
        {/* altura */}
          <Cartao className='h-18rem'>
          {/* garantindo altura para alternar entre mensagem e jogo */}
            <div className='h-12rem'>
              
              {/* centraliza e pega toda a altura que pode */}
                <div className='flex align-items-center h-full justify-content-center'>
                  <Mensagem texto='Clique para iniciar' className='md:w-8 w-10' />
                </div>
            </div>
            <Botoes />
          </Cartao>
        </div>
        {/* 12 colunas. 6 para telas grandes */}
        <div className='col-12 lg:col-6'>
          <Cartao 
            titulo="Sua pontuação"
            // altura igual à do outro
            className='h-18rem'>
          </Cartao>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
