const express = require('express');
const router = express.Router();
const cityController = require('../controllers/cityController');

router.get('/cities', cityController.getCities);

router.post('/cities', cityController.addCity);

router.put('/cities/:id', cityController.updateCity);

router.delete('/cities/:id', cityController.deleteCity);

module.exports = router;
