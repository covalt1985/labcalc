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
    return activeTest[0].shorthand;
  }

  render() {
    const isClicked = this.state.isClicked;
    return (
      <div>
        <Menu
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
      </div>
    );
  }
}

export default App;
