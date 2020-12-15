import React, { useState, useEffect } from 'react'
import * as S from './styles'
//componets
import taskService from '../../services/taskService'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Icons from '../../utils/icons'
import Trash from '../../assets/trash.png'
import { Redirect } from 'react-router-dom'
import { format } from 'date-fns'
import isConnected from '../../utils/isConnected'




function Task({ match }) {
    const [redirect, setRedirect] = useState(false)
    const [type, setType] = useState();
    const [id, setId] = useState();
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hours, setHours] = useState();



    async function getTask() {
        if (match.params.id) {

            try {
                const task = await taskService.getTaskForID(match.params.id)
                console.log(task)
                setType(task.data.type)
                setTitle(task.data.title)
                setDescription(task.data.description)
                setDone(task.data.done)
                setDate(format(new Date(task.data.when), 'yyyy-MM-dd'))
                setHours(format(new Date(task.data.when), 'HH:mm'))
            } catch (err) {
                alert(err)
            }
        }
    }

    async function createAndEditTask() {
        if (type && title && description && date && hours) {

            if (match.params.id) {
                try {
                    const task = {
                        macaddress: isConnected,
                        done,
                        type,
                        title,
                        description,
                        when: `${date}T${hours}:00.000`
                    }
                    await taskService.editTask(task, match.params.id)
                    alert('Task atualizada com sucesso!')
                    setRedirect(true)
                } catch (err) {
                    alert(err)
                }
            } else {
                try {
                    const task = {
                        macaddress: isConnected,
                        type,
                        title,
                        description,
                        when: `${date}T${hours}:00.000`
                    }
                    await taskService.saveTask(task)

                    alert('Enviado com sucesso!')
                    setRedirect(true)
                } catch (err) {
                    alert(err)
                }
            }
        }
        else alert('Preencha todos os campos')
    }

    async function deleteTask() {
        try {
            const res = window.confirm('Deseja excluir essa tarefa?')
            if (res === true) {
                await taskService.deleteTask(match.params.id)
                setRedirect(true)
            }
        } catch (err) {
            alert(err)
        }
    }


    useEffect(() => {
        if(!isConnected){
            setRedirect(true)
          }
        getTask();
    }, [])
    return (
        <S.Container>
            {redirect && <Redirect to='/'></Redirect>}
            <Header />
            <S.Register >
                <S.Icons>
                    {
                        Icons.map((icon, index) =>
                            index > 0 &&
                            <button type='button' onClick={() => setType(index)} >
                                <img src={icon} alt="Icone da tarefa" className={type && type !== index && 'inative'} />

                            </button>
                        )
                    }
                </S.Icons>

                <S.Input>
                    <span> Título </span>
                    <input type="text" placeholder="Título da tarefa" onChange={e => setTitle(e.target.value)} value={title}></input>
                </S.Input>
                <S.Input>
                    <span> Descrição </span>
                    <textarea type="text" rows='5' placeholder="Descrição da tarefa" onChange={e => setDescription(e.target.value)} value={description}></textarea>
                </S.Input>


                <S.RegisterTime>
                    <S.InputTime>
                        <span> Data </span>
                        <input type="date" rows='5' placeholder="Descrição da tarefa" onChange={e => setDate(e.target.value)} value={date}></input>
                    </S.InputTime>
                    <S.InputTime>
                        <span> Hora </span>
                        <input type="time" rows='5' placeholder="Descrição da tarefa" onChange={e => setHours(e.target.value)} value={hours}></input>
                    </S.InputTime>

                </S.RegisterTime>
            </S.Register>
            <S.Actions>
                <div>
                    <input type="checkbox" checked={done} onChange={() => setDone(!done)}></input>
                    <span>
                        CONCLUÍDO
                    </span>
                </div>
                {match.params.id && <button onClick={deleteTask} >
                    <img src={Trash} alt="excluir" />
                    <span> EXCLUIR </span>
                </button>}

            </S.Actions>
            <S.Save>
                <button onClick={createAndEditTask} >
                    <span>
                        SALVAR
                    </span>
                </button>
            </S.Save>

            <Footer />
        </S.Container>

    );
}

export default Task;
