import React, { PropTypes } from 'react';
import styles from './SearchBar.css';

const SearchBar = (props) => (
  <div className={styles.root}>
    <input className={styles.input} onChange={(evt) => props.updateText(evt.target.value)} />
    <button className={styles.button} onClick={props.fetchSongs} > Get Songs </button>
  </div>
);

SearchBar.propTypes = {
  updateText: PropTypes.func,
  fetchSongs: PropTypes.func,
};

export default SearchBar;
