import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Jogo from './Jogo';
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'
import './styles.css'

export default class App extends Component {
  render() {
    return (
        <Jogo/>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
