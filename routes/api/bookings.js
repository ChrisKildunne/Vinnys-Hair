const express = require('express');
const router = express.Router();
const bookingsCtrl = require('../../controllers/api/bookings');

router.get('/', bookingsCtrl.index);
router.post('/', bookingsCtrl.create);

module.exports = router;
