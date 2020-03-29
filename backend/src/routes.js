const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');

// ongs
routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);
// incidents
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);

module.exports = routes;