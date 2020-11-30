import React, { useState } from 'react'
import * as S from './styles'
//componets
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FilterCard from '../../components/FilterCard'
import TaskCard from '../../components/TaskCard'


function Home() {
  const [filterActivr, setFilteractivr] = useState('today');
  return (
    <S.Container>
      <Header />
      <S.Filters>
        <button onClick={() => setFilteractivr('all')}>
          <FilterCard title="TODOS" active={filterActivr === 'all'} />
        </button>
        <button onClick={() => setFilteractivr('today')}>
          <FilterCard title="HOJE" active={filterActivr === 'today'} />
        </button>
        <button onClick={() => setFilteractivr('week')}>
          <FilterCard title="SEMANA" active={filterActivr === 'week'} />
        </button>
        <button onClick={() => setFilteractivr('month')}>
          <FilterCard title="MÊS" active={filterActivr === 'month'} />
        </button>
        <button onClick={() => setFilteractivr('year')}>
          <FilterCard title="ANO" active={filterActivr === 'year'} />
        </button>
      </S.Filters>

<S.Divider>
  <h3>TAREFAS</h3>
</S.Divider>

      <S.Content>
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </S.Content>

      <Footer />
    </S.Container>

  );
}

export default Home;
