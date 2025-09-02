const express = require('express')
const router = express.Router()
const engineerApiController = require('../controllers/engineerAPI.js')
const engineerDataController = require('../controllers/engineerData.js')


router.get('/engineers', engineerDataController.index, engineerApiController.index)
router.get('/engineers/:id', engineerDataController.show, engineerApiController.show)
router.post('/engineers', engineerDataController.create, engineerApiController.create)
router.put('/engineers/:id', engineerDataController.update, engineerApiController.show)
router.delete('/engineers/:id', engineerDataController.destroy, engineerApiController.destroy)

module.exports = router 