import React, {useState, useEffect} from 'react'
import * as S from './style'
import logo from '../../assets/logo.png'
import notification from '../../assets/notification.png'
import { Link, Redirect } from 'react-router-dom'

import isConnected from '../../utils/isConnected'
import taskService from '../../services/taskService'


function Header({ clickTaskLate }) {
  const [lateTask, setLateTask] = useState([]);
  const [redirect, setRedirect] = useState(false);


  async function loadTaksLate() {
    try {
      const data = await taskService.loadTaskLate()
      setLateTask(data.data.length)
    } catch (err) {
      alert(err)
    }
  }
  async function logout(){
    localStorage.removeItem('mac');
    setRedirect(true)
    window.location.reload();
  }

  useEffect(() => {
    loadTaksLate();
  }, [])

  return (
    <S.barHeader>
      <S.left>
        <Link to='/'> <img src={logo} alt="logo" /></Link>
      </S.left>

      <S.rigth>
        <Link to='/'> INÍCIO </Link>
        <Link to='/Task'> NOVA TAREFA </Link>
        { isConnected ?
          <button onClick={logout}> <a>SAIR</a> </button>
          :
          <Link to='/QrCode'> MOBILE QR CODE</Link>
        }
        <button onClick={clickTaskLate}>
          <img src={notification} alt="notification" />
          <span>{lateTask}</span>
        </button>
      </S.rigth>
    </S.barHeader>
  );
}

export default Header;
