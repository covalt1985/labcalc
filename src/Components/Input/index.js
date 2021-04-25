import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setPlaceholder(test, counter) {
    switch (test) {
      case 'homa':
        return counter === 0 ? 'Glukoza mg/dl' : 'Insulina uIU/ml';
      case 'caCor':
        return counter === 0 ? 'Wapń mg/dl' : 'Albumina g/l';
      case 'caCr':
        return counter === 0 ? 'Wapń w moczu mg/dl' : 'Kreat. w moczu mg/dl';
      case 'prl':
        return counter === 0 ? 'Prolaktyna' : 'Prolaktyna po precypitacji';

      default:
        return '';
    }
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
            placeholder={this.setPlaceholder(this.props.menuTest, keyCounter)}
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
