const { Client } = require('pg');


const db = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT 
});

db.connect()
.then(()=> console.log(`Connected to ${process.env.DB_NAME} database`))
.catch(err => console.log('ERROR:', err.stack));

module.exports = db;
