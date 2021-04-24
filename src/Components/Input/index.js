import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  createInputs() {
    const inputs = [];

    while (inputs.length < this.props.inputsNum) {
      inputs.push(<input type="number" className={this.props.menuTest} />);
    }
    return inputs;
  }
  render() {
    return <div>{this.createInputs()}</div>;
  }
}

export default Input;
