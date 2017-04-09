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
        <img role="presentation" src={albumImage.url} />
        <span className={styles.albumName}> {albumName} </span>
      </div>
      <div className={styles.songAndDescription}>
        <audio controls duration src={songData.preview_url} />
        <span className={styles.songDescription}> Name: {songData.name} </span>
        <span className={styles.songDescription}> Duration: {mins} </span>
      </div>
    </div>
  );
};

SongItem.propTypes = {
  songData: PropTypes.object,
};

export default SongItem;
