const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const corsOptions = {
    origin: "https://front-end12345.onrender.com", // frontend URI (ReactJS)
}

// routes
const weather = require('./routes/api/weather');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('routes/api/weather', weather);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));