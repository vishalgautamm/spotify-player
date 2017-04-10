import React, { PropTypes } from 'react';
import styles from './SongItem.css';
import formatSeconds from '../../utils/formatSeconds';

const SongItem = (props) => {
  const { songData } = props;
  const album = songData.album;
  const albumName = album.name;
  const albumImage = album.images[1];

  const duration = Math.floor(songData.duration_ms / 1000);
  const mins = formatSeconds(duration);
  return (
    <div className={styles.root}>
      <div className={styles.album}>
        <img className={styles.image} role="presentation" src={albumImage.url} />
      </div>
      <div className={styles.songAndDescription}>
        <span className={styles.songDescription}> {songData.name} </span>
        <span className={styles.albumName}> {albumName} </span>
        <span className={styles.songDescriptionMin}> {mins} </span>
        <audio controls duration autoPlay src={songData.preview_url} />
      </div>
    </div>
  );
};

SongItem.propTypes = {
  songData: PropTypes.object,
};

export default SongItem;
