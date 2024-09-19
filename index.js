// index.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./database/config');
const celdaRoutes = require('./routes/celdaRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Rutas
app.use('', celdaRoutes);

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
