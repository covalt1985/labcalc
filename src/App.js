import React, { Component } from 'react';

import './App.css';
import Menu from './Components/Menu/index';

class App extends Component {
  static defaultProps = {
    tests: [
      { testName: 'HOMA IR', shorthand: 'homa', inputs: 2, unit: '' },
      {
        testName: 'Wapń Skorygowany',
        shorthand: 'caCor',
        inputs: 2,
        unit: 'mg/dl',
      },
      {
        testName: 'Wapń / g Kreatyniny',
        shorthand: 'caCr',
        inputs: 2,
        unit: 'mg/g',
      },
      {
        testName: 'Odzysk Prolaktyny',
        shorthand: 'prl',
        inputs: 2,
        unit: '%',
      },
    ],
  };

  constructor(props) {
    super(props);

    this.state = {
      item: '',
      isClicked: false,
    };

    this.renderMenuItem = this.renderMenuItem.bind(this);
    this.passShorthand = this.passShorthand.bind(this);
    this.reset = this.reset.bind(this);
  }

  //checks which el was clicked and pass it in props to Menu
  renderMenuItem(item) {
    this.setState({ item: [item], isClicked: true });
  }

  //pass shorthand and unit to Menu
  passShorthand() {
    const activeTest = this.props.tests.filter(el =>
      el.testName === this.state.item[0]
        ? { shorthand: el.shorthand, unit: el.unit }
        : ''
    );

    return this.state.isClicked ? activeTest : '';
  }

  //reset button
  reset() {
    const list = document.querySelectorAll('li');

    list.forEach(li => {
      li.classList.remove('goodbye', 'hello');
    });

    document.querySelectorAll('input').forEach(input => {
      input.value = '';
    });

    this.setState({ isClicked: false, item: '' });
  }

  render() {
    const isClicked = this.state.isClicked;
    return (
      <div>
        <Menu
          //show list of items
          menuItems={this.props.tests.map(test => {
            return {
              name: test.testName,
              shorthand: test.shorthand,
              inputsNum: test.inputs,
            };
          })}
          renderClickedItem={this.renderMenuItem}
          activeItem={this.passShorthand}
          isClicked={isClicked}
        />
        <button onClick={this.reset} style={{ position: 'relative' }}>
          reset
        </button>
      </div>
    );
  }
}

export default App;
