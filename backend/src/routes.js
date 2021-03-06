const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

// session
routes.post('/sessions', SessionController.create);
// ongs
routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);
routes.get('/profile', ProfileController.index);
// incidents
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;