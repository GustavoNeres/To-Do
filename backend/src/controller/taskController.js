const { update } = require('../model/taskModel');
const taskModel = require('../model/taskModel');
const { report } = require('../routes/taskRoutes');


class TaskContoller {

    async create(req, res) {
        const task = new taskModel(req.body);
        await task
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(err => {
                return res.status(500).json(err)
            })
    }

    async update(req, res){
     await taskModel.findByIdAndUpdate({'_id': req.params.id},req.body, {new: true})
     .then(
         response => {
             return res.status(200).json(response)
         }
     )
     .catch(err => {
         return res.status(500).json(err)
     })
    }
}


module.exports = new TaskContoller()    