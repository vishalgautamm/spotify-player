import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import searchSpotify from '../utils/searchSpotify';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialMessage: 'greeting',
      song: '',
    };
  }

  fetchSongs = () => {
    searchSpotify(this.state.song)
      .then(songs => console.log(songs))
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
