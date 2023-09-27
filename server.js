require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080
const app = express();
const albumsRoutes = require('./routes/album-routes');
const songsRoutes = require('./routes/songs-routes');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.json());

app.use('/albums', albumsRoutes);
app.use('/songs', songsRoutes);


app.get('/', (req, res) => {
  res.send('hello world')
});

app.post('/stuff', (req, res) => {
  console.log('body', req.body);
  res.send('OK')
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})