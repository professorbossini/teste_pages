import React, { PureComponent } from 'react';
import { Chart } from 'primereact/chart';
export default class GraficoLinha extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      //suavizar as curvas
      tension: 0.4,
      //preencher a área sob o gráfico?
      fill: false,
    };
  }

  colecoes = {
    acertos: {
      titulo: 'Acertos',
      dados: [],
      cor: '#2196F3',
    },
    erros: {
      titulo: 'Erros',
      dados: [],
      cor: '#F44336',
    },
  };

  contador = [];

  atualizarDados = () => {
    this.colecoes = {
      acertos: {
        titulo: 'Acertos',
        dados: this.props.zerar
          ? []
          : [...this.colecoes.acertos.dados, this.props.acertos],
        cor: '#2196F3',
      },
      erros: {
        titulo: 'Erros',
        dados: this.props.zerar
          ? []
          : [...this.colecoes.erros.dados, this.props.erros],
        cor: '#F44336',
      },
      tension: 0.4,
      fill: false,
    };
    this.contador = this.props.zerar ? [] : [...this.contador, this.props.contador];
  };

  render() {
    this.atualizarDados();
    return (
      <Chart
        options={{
          animation: {
            duration: 0,
          },
          scales: {
            y: {
              ticks: {
                stepSize: 1,
              },
            },
          },
        }}
        type='line'
        data={{
          labels: this.contador,
          datasets: [
            {
              label: this.colecoes.acertos.titulo,
              data: this.colecoes.acertos.dados,
              fill: this.state.fill,
              borderColor: this.colecoes.acertos.cor,
              tension: this.state.tension,
            },
            {
              label: this.colecoes.erros.titulo,
              data: this.colecoes.erros.dados,
              fill: this.state.fill,
              borderColor: this.colecoes.erros.cor,
              tension: this.state.tension,
            },
          ],
        }}
      />
    );
  }
}
