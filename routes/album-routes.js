const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {

  getAlbums().then(response => res.json(response));

});

router.get('/:name', (req, res) => {
  // localhost:3000/albums/:name
  //some query based on album name
})

module.exports = router;