const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dontenv = require('dotenv/config');
const cors = require('cors');
const userRoutes = require('./routes/routes');

const app = express()
let port = process.env.PORT;

if (port == null || port == '') {
    port = 3000;
  }

//Middleware 
app.use(cors());
app.use(bodyParser.json());
app.use('/', userRoutes);
app.use(express.static('public'));

//starts server 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//connects to database
mongoose.connect(process.env.DB_CONNECTON, { useNewUrlParser: true, useUnifiedTopology: true  }, () => {
    console.log('connected to DB');
  });
  