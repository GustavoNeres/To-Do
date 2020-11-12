const { response } = require('express');
const { update } = require('../model/taskModel');
const taskModel = require('../model/taskModel');
const { report } = require('../routes/taskRoutes');
const {startOfDay, endOfDay} = require('date-fns')

const current = new Date()

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

    async update(req, res) {
        await taskModel.findByIdAndUpdate({ '_id': req.params.id }, req.body, { new: true })
            .then(
                response => {
                    return res.status(200).json(response)
                }
            )
            .catch(err => {
                return res.status(500).json(err)
            })
    }

    async allTaskUser(req, res) {
        await taskModel.find(
            { macaddress: { $in: req.body.macaddress } }
        ).sort('when')
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    async showOneTask(req, res) {
        await taskModel.findById(req.params.id)
            .then(response => {
                if (response)
                    return res.status(200).json(response)
                else
                    return res.status(404).json({ error: "Id não localizado!" })
            })
            .catch(err => {
                return res.status(500).json(err)
            })
    }

    async removeTaks(req, res) {
        await taskModel.deleteOne({ '_id': req.params.id })
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(err => {
                return res.status(500).json(err)
            })
    }

    async doneTask(req, res) {
        await taskModel.findByIdAndUpdate(
            { '_id': req.params.id },
            { 'done': req.params.done },
            { new: true }
        )
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(err => {
                return res.status(500).json(err)
            })
    }

    async lateTask(req, res) {
        await taskModel
            .find({
                'when': { $lt: current },
                'macaddress': { $in: req.body.macaddress }
            })
            .sort('when')
            .then(response => {
                return res.status(200).json(response)
            }
            )
            .catch(err => {
                return res.status(500).json(err)
            })
    }

    async today(req, res){
        await taskModel.find({
            'macaddress': { $in: req.body.macaddress },
            'when': {$gte: startOfDay(current), $lte: endOfDay(current)}
        })
        .sort('when')
        .then(response =>{
            return res.status(200).json(response)
        })
        .catch(err => {
            return res.status(500).json(err)
        })
    }
}

module.exports = new TaskContoller()    