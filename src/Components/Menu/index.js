import React, { Component } from 'react';

import './style.css';
import Input from '../Input/index';
import { testPicker } from '../functions/index';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTest: '', result: '' };
    this.handleTestClick = this.handleTestClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleTestClick(e) {
    if (this.props.isClicked) return;

    const lis = document.querySelectorAll('li');
    const addHidingClasses = element => {
      element.classList.add('goodbye');
      Array.from(element.nextSibling.children).forEach(input =>
        input.setAttribute('disabled', 'true')
      );
    };

    lis.forEach(li =>
      li !== e.target ? addHidingClasses(li) : li.classList.add('hello')
    );
    //renderMenuItem func from App
    this.props.renderClickedItem(e.target.innerText);
  }

  handleButtonClick() {
    //select active inputs
    const inputValues = Array.from(
      document.getElementsByClassName(this.state.activeTest)
    );
    let result = testPicker[this.state.activeTest]();

    if (inputValues.some(input => !input.value)) {
      result = '';
      return;
    }
    if (inputValues.some(input => input.value <= 0)) {
      result = '';
    }
    this.setState({ result: result });
  }

  componentDidUpdate(prevProps) {
    return prevProps.isClicked !== this.props.isClicked
      ? this.setState({ activeTest: this.props.activeItem(), result: '' })
      : '';
  }

  render() {
    return (
      <div className="wrapper">
        <ul className="menu">
          {this.props.menuItems.map(item => {
            return (
              <>
                <li key={item} onClick={this.handleTestClick}>
                  {item.name}
                </li>
                <Input menuTest={item.shorthand} inputsNum={item.inputsNum} />
              </>
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
