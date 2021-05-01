import React, { Component } from 'react';

import './style.css';
import Input from '../Input/index';
import { testPicker } from '../functions/index';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = { activeTest: '', result: '', unit: '' };

    this.handleTestClick = this.handleTestClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleTestClick(e) {
    if (!this.props.isClicked) {
      const list = document.querySelectorAll('li');
      const addHidingClasses = element => {
        element.classList.add('goodbye');
      };

      list.forEach(li =>
        li !== e.target ? addHidingClasses(li) : li.classList.add('hello')
      );
      //renderMenuItem func from App
      this.props.renderClickedItem(e.target.innerText);
    }
    return;
  }

  handleButtonClick() {
    this.restartResultAnimation();

    //select active inputs
    const unit = this.props.activeItem();
    const inputValues = Array.from(
      document.getElementsByClassName(this.state.activeTest)
    );
    //imported func
    let result = testPicker[this.state.activeTest]();

    if (inputValues.some(input => !input.value || input.value <= 0)) {
      result = '';
      return;
    }
    this.setState({ result: result, unit: unit[0].unit });
  }

  restartResultAnimation() {
    const result = document.querySelector('h1');
    result.classList.remove('clicked');
    void result.offsetWidth;
    result.classList.add('clicked');
  }

  focusInput(className) {
    document.querySelector(`input.${className}`).focus();
  }

  componentDidUpdate(prevProps) {
    const activeTest = this.props.activeItem();
    const isActiveTetstinState = this.state.activeTest;

    isActiveTetstinState && this.focusInput(isActiveTetstinState);

    return prevProps.isClicked !== this.props.isClicked
      ? this.setState({
          activeTest: activeTest ? activeTest[0].shorthand : '', //active test must be set to enable input
          result: '',
          unit: '',
        })
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
            {`Wynik: ${this.state.result} ${this.state.unit}`}
          </h1>
        </ul>
      </div>
    );
  }
}

export default Menu;
