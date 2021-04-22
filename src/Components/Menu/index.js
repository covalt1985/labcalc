import React, { Component } from 'react';

import './style.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.clickedItem(e.target.innerText);
  }

  render() {
    return (
      <div className="wrapper">
        <ul className="menu">
          {this.props.menuItems.map(item => {
            return (
              <li key={item} onClick={this.handleClick}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Menu;
