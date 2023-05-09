require('dotenv').config();
// const { Client } = require('pg');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const { getAlbums, addAlbum } = require('./db/queries/example-queries')

// const db = new Client({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// })

// db.connect();

const PORT = process.env.PORT || 8080;
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const albumRoutes = require('./routes/album-routes');
const musicRoutes = require('./routes/music-routes');

app.use('/album', albumRoutes);
app.use('/music', musicRoutes);


app.post('/', (req, res)=> {
  console.log('this is the body', req.body);
  addAlbum(req.body).then((response) => res.status(200).send(response));
  
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})