const express = require('express')
const router = express.Router()

const taskController = require('../controller/taskController')

const taskValidation = require('../middlewares/taskValidation')
const macaddressValidation = require('../middlewares/macaddressValidation')

router.post('/', taskValidation, taskController.create);
router.put('/:id',taskValidation, taskController.update);
router.get('/filter/all', macaddressValidation, taskController.allTaskUser)
router.get('/:id', taskController.showOneTask)
router.delete('/:id', taskController.removeTaks)
router.put('/:id/:done', taskController.doneTask)
router.get('/filter/late', macaddressValidation, taskController.lateTask)
router.get('/filter/today', macaddressValidation, taskController.today)

module.exports = router;