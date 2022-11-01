const db = require('../connection');

const getAlbums = () => {
return db.query(`SELECT * FROM albums;`)
.then((res) => {
    return res.rows;
  });
};

const addAlbum = (album) => {
  return db.query(`INSERT INTO albums (album_name, artist_name, release_date, genre) values($1, $2, $3, $4);`, [album.album_name, album.artist_name, album.release_date, album.genre]).then(res => res);
}

module.exports = { getAlbums, addAlbum };