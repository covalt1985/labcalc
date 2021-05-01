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
      console.log(element.nextSibling.children);
    };
    lis.forEach(li =>
      li !== e.target ? addHidingClasses(li) : li.classList.add('hello')
    );
    //renderMenuItem func from App
    this.props.renderClickedItem(e.target.innerText);
    console.log(document.querySelectorAll('input').classList);
  }

  handleButtonClick() {
    this.restartAnimation();
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

  restartAnimation() {
    const result = document.querySelector('h1');
    result.classList.remove('clicked');
    void result.offsetWidth;
    result.classList.add('clicked');
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
              <React.Fragment key={item.name}>
                <li onClick={this.handleTestClick}>{item.name}</li>
                <Input
                  enter={this.handleButtonClick}
                  menuTest={item.shorthand}
                  inputsNum={item.inputsNum}
                  activeTest={this.state.activeTest}
                />
              </React.Fragment>
            );
          })}
          <button
            className={`count ${this.props.isClicked ? 'clicked' : ''}`}
            onClick={this.handleButtonClick}>
            Oblicz
          </button>
          <h1 className={this.props.isClicked ? 'clicked' : ''}>
            Wynik: {this.state.result}
          </h1>
        </ul>
      </div>
    );
  }
}

export default Menu;
