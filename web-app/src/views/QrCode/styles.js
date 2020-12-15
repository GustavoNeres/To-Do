import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`
export const Content = styled.div`
width: 70%;
display: flex;
flex-direction: column;
align-items: center;

h1{
    font-weight: bold;
    color: #AB47BC
}
p{
    font-weight: bold;
}
`
export const QrCode = styled.div`
`

export const Resgister = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 70px;

p{
    font-size: 12px;
}
input{
    border: 2px solid  #AB47BC;
    margin-bottom: 10px;
    padding: 5px;
    text-align: center;
}
button{
    color: #fff;
    border-radius: 10px;
    background-color: #AB47BC;
    border: none;
    padding: 5px;
    font-size: 14px;
}
`