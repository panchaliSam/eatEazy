const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/authRoutes');
const { authenticateToken } = require('./src/middleware/authMiddleware');
const db = require('./src/config/db');
const { AUTH_SERVICE_PORT } = require('./src/config/env');


const app = express();
app.use(bodyParser.json());

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Database connection test is complete!');
});

app.listen(AUTH_SERVICE_PORT, () => {
    console.log(`Server is running on port ${AUTH_SERVICE_PORT}`);
});
