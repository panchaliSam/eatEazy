const express = require('express');
const restaurantRoutes = require('./src/routes/restaurantRoutes');
const bodyParser = require('body-parser');
const { RESTAURANT_SERVICE_PORT } = require('./src/config/env');

const app = express();
app.use(bodyParser.json());

app.use('/', restaurantRoutes);

app.get('/', (req, res) => {
    res.send('Restaurant Service is running!');
});

app.listen(RESTAURANT_SERVICE_PORT, () => {
    console.log(`Server is running on port ${RESTAURANT_SERVICE_PORT}`);
});
