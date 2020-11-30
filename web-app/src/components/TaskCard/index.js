import React from 'react'
import * as S from './style'

import iconDeful from '../../assets/Grupo 88.png'

function TaskCard() {
  return (
    <S.Container>
        <S.TopCard>
        <img src={iconDeful} alt="" />
        <h3>Titulo da tarefa </h3>

        </S.TopCard>
        <S.botCard>
            <strong>10/12/2020</strong>
            <span>10:00</span>
        </S.botCard>

  </S.Container>
  );
}

export default TaskCard;