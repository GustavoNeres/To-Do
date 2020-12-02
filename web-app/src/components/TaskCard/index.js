import React, { useMemo } from 'react';
import * as S from './style';
import { format } from 'date-fns';

import icon from '../../utils/icons'


function TaskCard({ title, type, when }) {
  const date = useMemo(() =>  format(new Date(when), 'dd/MM/yyyy') )
  const hours = useMemo(() =>  format(new Date(when), 'HH:mm') )
  return (
    <S.Container>
      <S.TopCard>
        <img src={icon[type]} alt="" />
        <h3>{title} </h3>

      </S.TopCard>
      <S.botCard>
        <strong>{date}</strong>
        <span>{hours}</span>
      </S.botCard>

    </S.Container>
  );
}

export default TaskCard;