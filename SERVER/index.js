const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');  // Make sure this is declared only once
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');

require('dotenv').config();
require('./Models/db');

const PORT = process.env.PORT || 8081;

// Middleware
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

// Routes
app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.use('/api/auth', AuthRouter);
app.use('/api/products', ProductRouter);


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

