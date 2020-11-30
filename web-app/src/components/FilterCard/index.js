import React from 'react'
import * as S from './style'
import calendar from '../../assets/calendar.png'


function filterCard({title, active}) {
    return (
        <S.filterCard active={active} >
            <img src={calendar} alt="calendario" />
            <p>{title}</p>
        </S.filterCard>
    );
}

export default filterCard;
