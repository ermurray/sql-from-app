const db = require('../connection');

const insertSong = (song) => {
  const queryString = `
    INSERT INTO songs (album_id, track_number, song_name)
    values ($1, $2, $3)
    `;

  return db.query(queryString, [Number(song.albumId), Number(song.trackNumber), song.name])
  .then(response => response)
}

module.exports = {
  insertSong
}