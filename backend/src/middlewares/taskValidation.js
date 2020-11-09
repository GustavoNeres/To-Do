const taskModel = require('../model/taskModel')

const { isPast } = require('date-fns')
const taskValidation = async (req, res, next) => {

    const {macaddress, type, title, description, when} = req.body
    if(!macaddress){
        return res.status(400).json('macaddress é obrigatório')
    }else if(!type){
        return res.status(400).json('tipo é obrigatório')
    }else if(!title){
        return res.status(400).json('título é obrigatório')
    }else if(!description){
        return res.status(400).json('Descrição é obrigatória')
    }else if(!when){
        return res.status(400).json('Data e Hora são obrigatório')
    }else if(isPast(new Date(when))){
        return res.status(400).json('Escolha uma data e hora futura')
    }else{
        let exists;

        exists = await taskModel.findOne(
            {
                'when': {'$eq': new Date(when)},
                'macaddress': {'$in': macaddress}
            }
        )
        if(exists){
            return res.status(400).json('Já existe uma tarefa para este horário')
        }
        next()
    }
}

module.exports = taskValidation