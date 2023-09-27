const express = require('express');
const router = express.Router();
const { getAlbumById, getAllAlbums } = require('../db/queries/album-queries');

router.get('/', (req, res) => {
  getAllAlbums()
  .then(rows => res.status(200).send(rows))
  .catch(err => res.status(500));
});

router.get('/:id', (req, res) => {
  console.log('params', req.params);
  getAlbumById(req.params.id)
  .then(rows => res.status(200).send(rows))
  .catch(err => res.status(500).send(err));
});

module.exports = router;