import React from 'react';

class Question extends React.Component {
  constructor(props) {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      active: true
    }
  }

  handleClick() {
    if (this.state.active === false) return;

    const answer = prompt(this.props.body.toLowerCase());
    if (answer === this.props.answer.toLowerCase()) {
      this.props.updateScore(this.props.value)
    } else {
      alert(`We're sorry, the correct answer was ${this.props.answer}!`);
      this.props.updateScore(-this.props.value);
    }
    this.setState({active: false});
  }
  render() {
    const cssClass = this.state.active ? 'question--active' : 'question--inactive';
    return (
      <li onClick={this.handleClick} className={cssClass}>
        ${this.props.value}
      </li>
    )
  }
}

module.exports = Question;
