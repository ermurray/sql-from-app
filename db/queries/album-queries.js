const db = require('../connection/index');

const getAllAlbums = () => {
  return db.query('SELECT * FROM albums;')
  .then(response => response.rows);
};

const getAlbumById = (id) => {
  return db.query('SELECT * FROM albums WHERE id = $1', [id])
  .then(response => response.rows);
};


module.exports = {
  getAllAlbums,
  getAlbumById
};