const express = require('express')
const router = express.Router()

const taskController = require('../controller/taskController')

const taskValidation = require('../middlewares/taskValidation')


router.post('/', taskValidation, taskController.create);
router.put('/:id',taskValidation, taskController.update);
router.delete('/:id', taskController.removeTaks)
router.put('/:id/:done', taskController.doneTask)

router.get('/:id', taskController.showOneTask)

router.get('/filter/all/:macaddress',  taskController.allTaskUser)
router.get('/filter/late/:macaddress',  taskController.lateTask)
router.get('/filter/today/:macaddress',  taskController.today)
router.get('/filter/week/:macaddress',  taskController.week)
router.get('/filter/month/:macaddress',  taskController.month)
router.get('/filter/year/:macaddress',  taskController.year)

module.exports = router;