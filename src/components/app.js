import React, { Component } from 'react';
import styles from './app.css';
import SearchBar from './SearchBar/SearchBar';
import searchSpotify from '../utils/searchSpotify';
import SongItem from './SongItem/SongItem';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialMessage: 'greeting',
      song: '',
      tracks: {},
    };
  }

  fetchSongs = () => {
    searchSpotify(this.state.song)
      .then(({ tracks }) => this.setState({ tracks }));
  };

  render() {
    const { tracks } = this.state;
    return (
      <div className={styles.root}>
        <div className={styles.searchBar}>
          <SearchBar updateText={(song) => this.setState({ song })} fetchSongs={this.fetchSongs} />
        </div>
        <div className={styles.content}>
          {tracks.items && <SongItem songData={tracks.items[0]} />}
        </div>
      </div>
    );
  }
}
