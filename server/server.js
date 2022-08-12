// required imports
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connnectDB = require('./config/db');
const port = process.env.PORT || 5000;
const cors = require('cors');

// connect to Database
connnectDB();

// create express app
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/users', require('./routes/user'));
app.use('/api/products', require('./routes/products'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/admin', require('./routes/admin'));

// global error handler for express
app.use(errorHandler);

// start server
app.listen(port, () => console.log(`Server started on port ${port}`));
