import React, { Component } from 'react';
import styles from './app.css';
import SearchBar from './SearchBar/SearchBar';
import searchSpotify from '../utils/searchSpotify';
import SongItem from './SongItem/SongItem';
import SongList from './SongList/SongList';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialMessage: 'greeting',
      song: '',
      tracks: {},
      songPosition: 0,
    };
  }

  fetchSongs = () => {
    searchSpotify(this.state.song)
      .then(({ tracks }) => this.setState({ tracks }));
  };

  render() {
    const { tracks, songPosition } = this.state;
    return (
      <div className={styles.root}>
        <div className={styles.searchBar}>
          <SearchBar updateText={(song) => this.setState({ song })} fetchSongs={this.fetchSongs} />
        </div>
        <div className={styles.content}>
          {tracks.items && <SongItem songData={tracks.items[songPosition]} />}
        </div>
        {tracks.items && <SongList listOfSongs={tracks.items} selectSong={(songPosition) => this.setState({ songPosition })} />}
      </div>
    );
  }
}
