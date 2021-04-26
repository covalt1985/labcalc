import React, { Component } from 'react';

import { setPlaceholder } from '../functions/index';
import './style.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  createInputs() {
    const inputs = [];
    let keyCounter = 0;

    while (inputs.length < this.props.inputsNum) {
      inputs.push(
        <>
          <input
            key={`${this.props.menuTest}${keyCounter}`}
            type="number"
            className={this.props.menuTest}
            placeholder={setPlaceholder(this.props.menuTest, keyCounter)}
          />
        </>
      );
      keyCounter = keyCounter + 1;
    }
    return inputs;
  }

  render() {
    return <div>{this.createInputs()}</div>;
  }
}

export default Input;
