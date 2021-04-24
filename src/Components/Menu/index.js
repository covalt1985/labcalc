import React, { Component } from 'react';

import './style.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.isClicked) return;
    const lis = document.querySelectorAll('li');
    lis.forEach(li =>
      li !== e.target ? li.classList.add('goodbye') : li.classList.add('hello')
    );
    this.props.clickedItem(e.target.innerText);
  }

  render() {
    return (
      <div className="wrapper">
        <ul className="menu">
          {this.props.menuItems.map(item => {
            return (
              <div>
                <li
                  className={this.props.showStyle}
                  key={item}
                  onClick={this.handleClick}>
                  {item}
                </li>
                <input type="number" />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Menu;
