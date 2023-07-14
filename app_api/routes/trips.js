const { Router } = require('express')
const { get_trips, get_trip } = require('../controllers/trips')
const router = Router()

router.get('/trips', get_trips)
router.get('/trips/:tripCode', get_trip)

module.exports = router