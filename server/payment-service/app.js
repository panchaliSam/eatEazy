const express = require('express');
const paymentRoutes = require('./src/routes/paymentRoutes');
const bodyParser = require('body-parser');
const axios = require("axios");
const { PAYMENT_SERVICE_PORT } = require('./src/config/env');

const app = express();
app.use(bodyParser.json());

app.use('/api/payments', paymentRoutes);

app.get('/', (req, res) => {
    res.send('Database connection test is complete!');
});

app.listen(PAYMENT_SERVICE_PORT, () => {
    console.log(`Server is running on port ${PAYMENT_SERVICE_PORT}`);
});
