const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({
  path: __dirname + '/.env',
});
const port = process.env.PORT || 9092;
const fileupload = require('express-fileupload');

var corsOptions = {
  origin: "*",
  methods: ['GET', 'POST'],
  allowedHeaders: [
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Origin',
    'Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, authorization, isLogin',
  ],
};

app.use(cors(corsOptions));

//Connect to MongoDB
require('./app/config/DatabaseConfig')();
const db = require('./app/config/DatabaseConfig');
// const { default: axios } = require('axios');

// Middleware to parse incoming request bodies with URL-encoded payloads
app.use(
  express.urlencoded({
    extended: true, // Parsing of complex objects and arrays in the URL-encoded data
  })
);

app.use(express.json());

// Use express-fileupload middleware for manage file upload
app.use(fileupload());

app.get('/api', (req, res, next) => {
  db()
    .then(async (result) => {
      return res.send({
        status: 'success',
        code: '200',
        message: 'Welcome to SkinArena api',
      });
    })
    .catch((err) => {
      console.log('err :', err);
      next(err);
    });
});

require('./app/config/RouteConfig')(app);

app.use(express.static(__dirname + '/app/uploads'));


app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port: ${port}`);
});

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || 'Internal Server Error';
  res.status(err.statusCode).json({
    status: 'error',
    code: err.statusCode,
    message: err.message,
  });
});
