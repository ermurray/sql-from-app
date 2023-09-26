require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const PORT = process.env.PORT || 8080;
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const albumsRoutes = require('./routes/album-routes');
const musicRoutes = require('./routes/music-routes');

app.use('/albums', albumsRoutes);
app.use('/music', musicRoutes);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})