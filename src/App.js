import React, { Component } from 'react';

import './App.css';
import Menu from './Components/Menu/index';

class App extends Component {
  static defaultProps = {
    tests: [
      'HOMA IR',
      'Wapń Skorygowany',
      'Wapń / g Kreatyniny',
      'Odzysk Prolaktyny',
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      isClicked: false,
    };
    this.renderMenuItem = this.renderMenuItem.bind(this);
  }

  renderMenuItem(item) {
    this.setState({ item: [item], isClicked: true });
  }

  render() {
    const isClicked = this.state.isClicked;
    return (
      <div>
        {!isClicked && (
          <Menu
            menuItems={[...this.props.tests]}
            clickedItem={this.renderMenuItem}
          />
        )}
        {isClicked && (
          <Menu
            menuItems={[...this.state.item]}
            clickedItem={this.renderMenuItem}
          />
        )}
      </div>
    );
  }
}

export default App;
