// Gustavo Olgiati

const express = require('express');
const morgan = require('morgan');
const cors = require("cors");

const app = express();

// This is CORS ref: https://developer.mozilla.org/eng-US/docs/web/HTTP/CORS
var corsOptions = {
    origin: "http://localhost:8080"
};
app.use(cors(corsOptions));

// Middleware Morgan is used for debugging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Middleware json us used for injecting the body attribute in the pipeline
app.use(express.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log('Hello from middleware');
    next();
});

// Middleware routes loading
const salesRouter = require('./routes/salesRouter');
const userRouter = require('./routes/userRouter');

app.use('/api/v1/sales', salesRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
