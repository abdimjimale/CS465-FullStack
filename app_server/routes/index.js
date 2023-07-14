const { Router } = require('express')
const router = Router()
const ctrlMain = require('../controllers/main')

router.get('/', ctrlMain.index)

module.exports = router