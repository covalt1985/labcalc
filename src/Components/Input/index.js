import React, { Component } from 'react';

import { setPlaceholder } from '../functions/index';
import './style.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    return e.key === 'Enter' ? this.props.enter() : '';
  }

  createInputs() {
    const inputs = [];
    let keyCounter = 0;

    while (inputs.length < this.props.inputsNum) {
      inputs.push(
        <React.Fragment key={`${this.props.menuTest}${keyCounter}`}>
          <div style={{ width: '100%' }}>
            <input
              type="number"
              className={this.props.menuTest}
              onKeyPress={this.handleKeyPress}
              disabled={
                this.props.menuTest === this.props.activeTest ? false : true
              }
            />
            <span>{setPlaceholder(this.props.menuTest, keyCounter)}</span>{' '}
          </div>
        </React.Fragment>
      );
      keyCounter = keyCounter + 1;
    }

    return inputs;
  }

  render() {
    return <div style={{ display: 'flex' }}>{this.createInputs()}</div>;
  }
}

export default Input;
