const db = require('../connection');

const getAllAlbums = () => {
  return db.query('SELECT * FROM albums;')
  .then(res => {
    return res.rows
  })
}

const addAlbum = (album) => {
  return db.query(`INSERT INTO albums (album_name, artist_name, release_date, genre) values($1, $2, $3, $4);`, [album.name, album.artist, album.releaseDate, album.genre])
  .then(res => res);
}

module.exports = { getAllAlbums, addAlbum };