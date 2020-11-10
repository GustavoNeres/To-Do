const express = require('express')
const router = express.Router()

const taskController = require('../controller/taskController')

const taskValidation = require('../middlewares/taskValidation')
const macaddressValidation = require('../middlewares/macaddressValidation')

router.post('/', taskValidation, taskController.create);
router.put('/:id',taskValidation, taskController.update);
router.get('/filter/all', macaddressValidation, taskController.allTaskUser)

module.exports = router;