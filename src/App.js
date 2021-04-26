import React, { Component } from 'react';

import './App.css';
import Menu from './Components/Menu/index';

class App extends Component {
  static defaultProps = {
    tests: [
      { testName: 'HOMA IR', shorthand: 'homa', inputs: 2 },
      { testName: 'Wapń Skorygowany', shorthand: 'caCor', inputs: 2 },
      { testName: 'Wapń / g Kreatyniny', shorthand: 'caCr', inputs: 2 },
      { testName: 'Odzysk Prolaktyny', shorthand: 'prl', inputs: 2 },
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

  //pass in prop to Menu to check which el was clicked
  renderMenuItem(item) {
    this.setState({ item: [item], isClicked: true });
  }

  //passes shorthand to Menu state
  passShorthand() {
    const activeTest = this.props.tests.filter(el =>
      el.testName === this.state.item[0] ? el.shorthand : ''
    );
    return this.state.isClicked ? activeTest[0].shorthand : '';
  }

  reset() {
    this.setState({ isClicked: false, item: '' });
    const lis = document.querySelectorAll('li');
    lis.forEach(li => {
      li.classList.remove('goodbye', 'hello');
    });
    document.querySelectorAll('input').forEach(input => {
      input.removeAttribute('disabled');
      input.value = '';
    });
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
