import React, { useState, useEffect } from 'react'
import * as S from './styles'
//componets
import taskService from '../../services/taskService'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Qr from 'qrcode.react'
import {Redirect} from 'react-router-dom'
import isConnected from '../../utils/isConnected'



function QrCode() {
    const [mac, setMac] = useState([]);
    const [redirect, setRedirect] = useState(false)

    async function saveMac(){
        if(!mac)
        alert('Preencha o campo')
        else{

            await localStorage.setItem('mac', mac)
            setRedirect(true)
            window.location.reload();
        }
    }

    return (
        <S.Container>
            {redirect && <Redirect to='/' />}
            <Header />
            <S.Content>
                <h1>CAPTURE O QRCODE PELO APP</h1>
                <S.QrCode>
                    <Qr value="getMacaddress" size={200} />
                </S.QrCode>
                <p>Suas atividades serão sincronizadas com seu celular!</p>

                <S.Resgister>
                    <p>DIGITE A NUMERAÇÃO QUE APARECEU NO CELULAR</p>
                    <input type="text" onChange={e => setMac(e.target.value)} value={mac}></input>
                    <button type="button" onClick={saveMac}>SINCRONIZAR</button>
                </S.Resgister>
            </S.Content>
            <Footer />
        </S.Container>
    )
}
export default QrCode;