import React, { Component } from 'react';

import './style.css';
import Input from '../Input/index';
import { homa, caCr, caCor, prl } from '../functions/index';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTest: '', result: '' };
    this.handleTestClick = this.handleTestClick.bind(this);
    this.pickTest = this.pickTest.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleTestClick(e) {
    if (this.props.isClicked) return;
    const lis = document.querySelectorAll('li');

    lis.forEach(li =>
      li !== e.target ? li.classList.add('goodbye') : li.classList.add('hello')
    );
    //renderMenuItem func from App
    this.props.renderClickedItem(e.target.innerText);
  }

  handleButtonClick() {
    if (
      Array.from(document.getElementsByClassName(this.state.activeTest)).some(
        input => !input.value
      )
    ) {
      console.log('not ok');
    } else {
      this.setState({ result: this.pickTest() });
    }
  }

  //func for button
  pickTest() {
    switch (this.state.activeTest) {
      case 'homa':
        return homa();
      case 'caCor':
        return caCor();
      case 'caCr':
        return caCr();
      case 'prl':
        return prl();
      default:
    }
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
              <div className="listWrapper">
                <li key={item} onClick={this.handleTestClick}>
                  {item.name}
                </li>
                <Input menuTest={item.shorthand} inputsNum={item.inputsNum} />
              </div>
            );
          })}
          <button onClick={this.handleButtonClick}>oblicz</button>
          <h1>Result:{this.state.result} </h1>
        </ul>
      </div>
    );
  }
}

export default Menu;
