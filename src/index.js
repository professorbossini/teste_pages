import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cartao from './Cartao';
import Jogo from './Jogo';
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'
import './styles.css'
import Botoes from './Botoes';
import Mensagem from './Mensagem';

export default class App extends Component {
  state = {
    status: 'off',
    acertos: 0,
    erros: 0
  }
  alterarStatus = (status) => {
    this.setState({status})
  }
  atualizarPontuacao = (acertou) => {
    this.setState(acertou ? {acertos: this.state.acertos + 1} : {erros: this.state.erros + 1})
  }

  zerarPontuacao = () => {
    this.setState({
      acertos: 0,
      erros: 0
    })
  }
  render() {
    return (
      <Cartao className="h-18rem">
        <div className="h-12rem">
          {
            this.state.status === 'on' ?
            <Jogo 
              status={this.state.status}
              fAtualizarPontuacao={this.atualizarPontuacao}
            />
            :
            <Mensagem texto="Jogo encerrado" />
          }        
        </div>
        <Botoes
          fIniciar={() => this.alterarStatus('on')} 
          fEncerrar={() => this.alterarStatus('off')}
          fZerar={() => this.zerarPontuacao()}
        />
        {'Acertos: ' + this.state.acertos}
        {'Erros: ' + this.state.erros}
      </Cartao>
  
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
