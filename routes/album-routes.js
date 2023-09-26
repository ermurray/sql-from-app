const express = require('express');
const { getAllAlbums, addAlbum } = require('../db/queries/example-queries');
const router = express.Router();


router.get('/', (req, res) => {
  getAllAlbums()
    .then(rows => res.json(rows));
});

router.post('/new', (req, res) => {
  console.log('body', req.body);

  if(!req.body.album) return res.status(404).send('no album');

  addAlbum(req.body.album)
    .then(result => {
      console.log('results', result);
      res.status(200).send('you inserted an album yaaaay!')
    })
    .catch(err => console.log(err));
    
})

router.get('/ping', (req, res) => {
  res.status(200).send('pinging albums again?');
});

module.exports = router;