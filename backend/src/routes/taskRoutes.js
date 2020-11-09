const express = require('express')
const router = express.Router()

const taskController = require('../controller/taskController')

const taskValidation = require('../middlewares/taskValidation')

router.post('/', taskValidation, taskController.create);
router.put('/:id',taskValidation, taskController.update);

module.exports = router;