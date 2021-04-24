import React, { Component } from 'react';

import './style.css';
import Input from '../Input/index';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTest: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.isClicked) return;
    const lis = document.querySelectorAll('li');
    lis.forEach(li =>
      li !== e.target ? li.classList.add('goodbye') : li.classList.add('hello')
    );
    //renterMenuItem func from App
    this.props.renderClickedItem(e.target.innerText);
  }

  componentDidUpdate(prevProps) {
    return prevProps.isClicked !== this.props.isClicked
      ? this.setState({ activeTest: this.props.activeItem() })
      : '';
  }

  render() {
    return (
      <div className="wrapper">
        <ul className="menu">
          {this.props.menuItems.map(item => {
            return (
              <div>
                <li key={item} onClick={this.handleClick}>
                  {item.name}
                </li>
                <Input menuTest={item.shorthand} inputsNum={item.inputsNum} />
              </div>
            );
          })}
          <button>oblicz</button>
        </ul>
      </div>
    );
  }
}

export default Menu;
