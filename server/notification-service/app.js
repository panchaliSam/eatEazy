const express = require('express');
const notificationRoutes = require('./src/routes/notificationRoutes');
const { NOTIFICATION_SERVICE_PORT } = require('./src/config/env');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/', notificationRoutes);

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
app.listen(NOTIFICATION_SERVICE_PORT || 4010, () => {
    console.log(`Server is running on port ${NOTIFICATION_SERVICE_PORT || 4010}`);
});
