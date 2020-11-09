const express = require('express')
const router = express.Router()

const taskController = require('../controller/taskController')

const taskValidation = require('../middlewares/taskValidation')

router.post('/', taskValidation, taskController.create);

module.exports = router;