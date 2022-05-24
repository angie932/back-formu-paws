const express = require('express');
const app = express();

const envio = require('../controllers/correoController');

app.post('/envio', envio.enviocorreos);

module.exports = app; 