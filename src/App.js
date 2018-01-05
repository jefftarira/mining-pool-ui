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
    console.log('pidiendo informacion');
    fetch('http://dwarfpool.com/eth/api?wallet=fcefe7d7fb939057e8b00ac0ae75e4ff7c36cd1c')
      .then((response) => response.json())
      .then((response) => {
        this.setState({ data: response });
      });
  }

  render() {    
    let card = <div />;

    if (JSON.stringify(this.state.data) !== '{}') {
      const data = {
        wallet: this.state.data.wallet,
        wallet_balance: this.state.data.wallet_balance,
        immature_earning: this.state.data.immature_earning,
        earning_24_hours: this.state.data.earning_24_hours,
        second_since_submit: this.state.data.workers.rig1.second_since_submit,
      };
      console.log(`Renderizando ${this.state.data.workers.rig1.second_since_submit}`);

      card = <CardInfo info={data} />;
    }

    return (
      <div className="App">
        <div className="App-header">
          <div className="App-logo-name">
            <img src={logo} alt="" className="App-logo" />
            <h2>Mining Pool <span>UI!</span></h2>
          </div>
        </div>
        <div className="App-intro">
          <div className="container-info">
            {card}
          </div>
          <div className="container-workers">
            <h2>Workers</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
