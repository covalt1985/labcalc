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
    this.reset = this.reset.bind(this);
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

    //check for errors
    inputValues.map(input => {
      return input.value <= 0 || !input.value || isNaN(input.value)
        ? input.classList.add('error')
        : input.classList.remove('error');
    });

    if (inputValues.some(input => input.value <= 0)) {
      result = 'błędne dane';
    } else if (isNaN(result) || !isFinite(result)) result = 'błędne dane';

    this.setState({
      result: result,
      unit: result && !isNaN(result) ? unit[0].unit : '',
    });
  }

  restartResultAnimation() {
    const result = document.querySelector('h1');
    result.classList.remove('clicked');
    void result.offsetWidth;
    result.classList.add('clicked');
  }

  componentDidUpdate(prevProps) {
    const activeTest = this.props.activeItem();

    return prevProps.isClicked !== this.props.isClicked
      ? this.setState({
          activeTest: activeTest ? activeTest[0].shorthand : '', //activeTest enables input
          result: '',
          unit: '',
        })
      : '';
  }

  //reset button
  reset() {
    const list = document.querySelectorAll('li');

    list.forEach(li => {
      li.classList.remove('goodbye', 'hello');
    });

    document.querySelectorAll('input').forEach(input => {
      input.value = '';
      input.classList.remove('error');
    });
    this.props.resetState();
  }

  render() {
    const buttonClass = `count ${this.props.isClicked ? 'clicked' : ''}`;

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

          <section className="buttonContainer">
            <button className={buttonClass} onClick={this.reset}>
              Wróć
            </button>
            <button className={buttonClass} onClick={this.handleButtonClick}>
              Oblicz
            </button>
          </section>
          <h1 className={this.props.isClicked ? 'clicked' : ''}>
            {`Wynik: ${this.state.result} ${this.state.unit}`}
          </h1>
        </ul>
      </div>
    );
  }
}

export default Menu;
