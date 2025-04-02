require('dotenv').config();  // Ensure .env variables are loaded

const express = require('express');
const cors = require('cors'); 
const paymentRoutes = require('./src/routes/paymentRoutes');
const { PAYMENT_SERVICE_PORT } = require('./src/config/env');

const app = express();

app.use(cors());  // Enable CORS
app.use(express.json()); // Use built-in JSON parser

app.use('/api/payments', paymentRoutes);

// Root Route
app.get('/', (req, res) => {
    res.send('Database connection test is complete!');
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error('Unhandled Error:', err);
    res.status(500).json({ message: 'Something went wrong', error: err.message });
});

// Start the Server
app.listen(PAYMENT_SERVICE_PORT || 4010, () => {
    console.log(`Server is running on port ${PAYMENT_SERVICE_PORT || 4010}`);
});
