import React, { Component } from 'react';
import { fadeOutUp } from 'react-animations';
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
        <div style={fadeOutUp}>
          <p>{this.props.name}</p>
          <h3 styel={fadeOutUp}>{this.props.value}</h3>
        </div>
      </div>
    );
  }
}

export default CardInfo;
