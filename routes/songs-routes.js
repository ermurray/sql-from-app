const express = require('express');
const router = express.Router();
const { insertSong } = require('../db/queries/songs-queries');

router.post('/add', (req, res) => {
  console.log('req.body', req.body);
  insertSong(req.body)
  .then(data =>{ console.log('data', data)
    res.status(200).send(`inserted ${data.rowCount}`);
  })
});

module.exports = router