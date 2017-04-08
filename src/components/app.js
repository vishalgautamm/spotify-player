import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialMessage: 'greeting',
      song: '',
    };
  }

  fetchSongs = () => {
    console.log('Hey I\'m clicked');
  };
  render() {
    const { initialMessage } = this.state;
    return (
      <div>
        <SearchBar updateText={(song) => this.setState({ song })} fetchSongs={this.fetchSongs} />
      </div>
    );
  }
}
