import React, { PropTypes } from 'react';
import styles from './SearchBar.css';

const SearchBar = (props) => (
  <div className={styles.root}>
    <input className={styles.input} onChange={(evt) => props.updateText(evt.target.value)} />
  </div>
);

SearchBar.propTypes = {
  updateText: PropTypes.func,
};

export default SearchBar;
