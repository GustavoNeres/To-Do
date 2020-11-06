const { Schema } = require('../config/database')
const mongoose = require('../config/database')
const Schena = mongoose.Schema

const taskSchema = new Schema({
    macaddress: {type: String, required: true},
    type: {type: Number, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    when: {type: Date, required: true},
    done: {type: Boolean, default: false},
    create: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('task', taskSchema)