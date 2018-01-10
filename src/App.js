import React, { Component } from 'react';

import CardInfo from './Card-info';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      intervals: 0,
    };
    this.loadInfo = this.loadInfo.bind(this);
  }

  componentWillMount() {
    this.loadInfo();
  }

  componentDidMount() {
    this.interval = setInterval(this.loadInfo, 10000);
  }

  loadInfo() {
    // fetch('http://dwarfpool.com/eth/api?wallet=fcefe7d7fb939057e8b00ac0ae75e4ff7c36cd1c')
    fetch('http://dwarfpool.com/eth/api?wallet=0xdc57f0e607c330c54De8152598959a94B832c1a0')
      .then((response) => response.json())
      .then((response) => {
        this.setState({ data: response });
      });
  }

  renderCards() {
    if (JSON.stringify(this.state.data) !== '{}') {
      const data = {
        wallet: this.state.data.wallet,
        wallet_balance: this.state.data.wallet_balance,
        immature_earning: this.state.data.immature_earning,
        earning_24_hours: this.state.data.earning_24_hours,
        transferring_to_balance: this.state.data.transferring_to_balance,
        hashrate: this.state.data.workers[''].hashrate,
      };

      return (
        <div className="container-info">
          <CardInfo name={'Wallet'} value={this.state.data.wallet} />
          <CardInfo name={'Balance'} value={`${this.state.data.wallet_balance} ETH`} />
          <CardInfo name={'Transfiriendo'} value={`${data.transferring_to_balance} ETH`} />
          <CardInfo name={'Sin confirmar'} value={`${this.state.data.immature_earning} ETH`} />
          <CardInfo name={'Minado en la ultimas 24 Horas'} value={`${this.state.data.earning_24_hours} ETH`} />
          <CardInfo name={'Hash rate'} value={`${data.hashrate} Mh/s`} />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-logo-name">
            <img src={logo} alt="" className="App-logo" />
            <h2>Mining Pool <span>UI!</span></h2>
          </div>
        </div>
        <div className="App-intro">
          {this.renderCards()}
          <div className="container-workers">
            <h2>Workers</h2>
            <p>{JSON.stringify(this.state.data.workers)}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
