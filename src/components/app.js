import React, { Component } from 'react';
import Button from './button';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      print: '',
      value: '',
    };
  }
  textEntered = (event) => {
    this.setState({ value: event.target.value });
  };
  printEntered = () => {
    this.setState({ print: this.state.value });
  }
  render() {
    return (
      <div>
        <h1>{this.state.print}</h1>
        <input type="text" onChange={this.textEntered} />
        <Button name={'Click this'} clicked={this.printEntered} />
      </div>
    );
  }
}
