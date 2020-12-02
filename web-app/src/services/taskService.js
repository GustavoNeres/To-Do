import api from './api'

const taskService = {

 loadTask: async function(filterActive){
     const tasks = await api.get(`/task/filter/${filterActive}/11:11:11:11:11:AB`)
     return tasks
    }
}

export default taskService