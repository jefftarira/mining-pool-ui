import React, { Component } from 'react';
import './Card-info.css';

class CardInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.info,
    };
  }

  render() {
    return (
      <div className="card">
        <div>
          <h3>Wallet</h3>
          <p className="valChange">{this.props.info.wallet}</p>

          <h3>Balance</h3>
          <p className="valChange">{this.props.info.wallet_balance} ETH</p>
        
          <h3>Sin confirmar</h3>
          <p className="valChange">{this.props.info.immature_earning} ETH</p>

          <h3>Minado en las ultimas 24 horas</h3>
          <p className="valChange">{this.props.info.earning_24_hours} ETH</p>         

          <h3>Tiempo rig1</h3>
          <p className="valChange">{this.props.info.second_since_submit}</p>   

        </div>
      </div>
    );
  }
}

export default CardInfo;
