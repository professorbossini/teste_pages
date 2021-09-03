import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
export default class Jogo extends Component {
    constructor(props){
        super(props)
        this.state = {
            iniciado: false
        }
    }
    iniciarJogo = () => {
        this.iniciado = true 
    }

    encerrarJogo = () => {
        this.iniciado = false
    }
    
    timer = null
    
  render() {
    const conta = (
      <div className={styles.conta}>
        <div className={styles.valor}>a</div>
        <div className={styles.valor}>b</div>
        <div className={styles.valor}>c</div>
      </div>
    );
    const botoes = (
      <div className={styles.botoes}>
        <Button
          label='Iniciar jogo'
          className='p-button-raised'
          icon='pi pi-check'
        />
        <Button
          label='Encerrar jogo'
          className='p-button-raised p-button-danger'
          icon='pi pi-times'
        />
      </div>
    );

    return (
      <Card title={this.props.titulo} style={styles.card}>
        <div className={styles.inner}>
          {conta}
          {botoes}
        </div>
      </Card>
    );
  }
}

const styles = {
  card: {
    backgroundColor: 'var(--blue-100)',
  },
  inner: 'border-round bg-orange-50 w-8 p-2 m-auto',
  conta:
    'flex justify-content-center align-items-center border-round bg-orange-200 shadow-2 h-4rem',
  valor:
    'flex justify-content-center align-items-center border-round border-1 border-400  h-3rem w-3rem',
  botoes: 'flex justify-content-evenly mt-5',
};

Jogo.defaultProps = {
  titulo: 'Jogo de continhas',
};
