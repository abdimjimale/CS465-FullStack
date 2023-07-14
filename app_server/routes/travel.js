const { Router } = require('express')
const { travel } = require('../controllers/travel')
const router = Router()
// const controller = require('../controllers/travel')

router.get('/', travel)

module.exports = router