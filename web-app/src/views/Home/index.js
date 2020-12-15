import React, { useState, useEffect } from 'react'
import * as S from './styles'
//componets
import taskService from '../../services/taskService'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FilterCard from '../../components/FilterCard'
import TaskCard from '../../components/TaskCard'
import { Redirect } from 'react-router-dom'
import isConnected from '../../utils/isConnected'


function Home() {
  const [filterActive, setFilteractive] = useState('today');
  const [tasks, setTasks] = useState([]);
  const [redirect, setRedirect] = useState(false);
 

  async function loadTaks() {
    await taskService.loadTask(filterActive)
      .then(response => {
        setTasks(response.data)
      })
  }
 
  function clickTaskLate() {
    setFilteractive('late')
  }

  useEffect(() => {
    if(!isConnected){
      setRedirect(true)
    }
    loadTaks();
  }, [filterActive])
  return (
    <S.Container>
      {redirect && <Redirect to={'/QrCode'}/>}
      <Header  clickTaskLate={clickTaskLate} />
      <S.Filters>
        <button onClick={() => setFilteractive('all')}>
          <FilterCard title="TODOS" active={filterActive === 'all'} />
        </button>
        <button onClick={() => setFilteractive('today')}>
          <FilterCard title="HOJE" active={filterActive === 'today'} />
        </button>
        <button onClick={() => setFilteractive('week')}>
          <FilterCard title="SEMANA" active={filterActive === 'week'} />
        </button>
        <button onClick={() => setFilteractive('month')}>
          <FilterCard title="MÊS" active={filterActive === 'month'} />
        </button>
        <button onClick={() => setFilteractive('year')}>
          <FilterCard title="ANO" active={filterActive === 'year'} />
        </button>
      </S.Filters>

      <S.Divider>
        <h3>{filterActive === 'late' ? 'TAREFAS ATRASADAS' : 'TAREFAS'}</h3>
      </S.Divider>

      <S.Content>
        {
          tasks.map(t => (

            <TaskCard title={t.title} type={t.type} when={t.when} id={t._id} />

          ))
        }
      </S.Content>

      <Footer />
    </S.Container>

  );
}

export default Home;
