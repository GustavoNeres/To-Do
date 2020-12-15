import api from './api'
import isConnected from '../utils/isConnected'

const taskService = {

    loadTask: async function (filterActive) {
        try{

            const tasks = await api.get(`/task/filter/${filterActive}/${isConnected}`)
            return tasks
        }catch(err){
            alert(err)
        }
    },

    loadTaskLate: async function () {
        try{

            const tasks = await api.get(`/task/filter/late/${isConnected}`)
            return tasks
        }catch(err){
            alert(err)
        }
    },

    saveTask: async function (input) {
        try{   
            await api.post(`/task`, input)
        }catch (err){
            alert(err)
        }
    },
    editTask: async function (input,id) {
        try{   
            await api.put(`/task/${id}`, input)
        }catch (err){
            alert(err)
        }
    },

    getTaskForID: async function (id){
        try{
           const task = api.get(`/task/${id}`)
           return task
        }catch(err){
            alert(err)
        }
    },

    deleteTask: async function (id){
        try{
           const task = api.delete(`/task/${id}`)
           return task
        }catch(err){
            alert(err)
        }
    }
}

export default taskService