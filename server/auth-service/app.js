const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/authRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const PORT = process.env.AUTH_SERVICE_PORT || 4001;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', authRoutes);

app.get('/', (req, res) => {
    res.send('Auth Service is running!');
});

app.listen(PORT, () => {
    console.log(`Auth Service is running on port ${PORT}`);
});
