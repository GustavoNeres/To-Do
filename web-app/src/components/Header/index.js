import React from 'react'
import * as S from './style'
import logo from '../../assets/logo.png'
import notification from '../../assets/notification.png'

function Header() {
  return (
    <S.barHeader>
      <S.left>
      <img src={logo} alt="logo" />
      </S.left>

      <S.rigth>
      <a href="#">INÍCIO</a>
      <a href="#">NOVA TAREFA</a>
      <a href="#">MOBILE QR CODE</a>
      <a href="#" id="notification">
      <img src={notification} alt="notification" />
      <span>5</span>
      </a>
      </S.rigth>
    </S.barHeader>
  );
}

export default Header;
