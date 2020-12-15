import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center
`
export const Register = styled.div`

width: 60%;
`
export const Icons = styled.div`
display: flex;
width: 100%;
justify-content: space-evenly;
margin-top: 20px; 

.inative{
    opacity: 0.3
}

button{
    background: none;
    border: none;
    cursor: pointer;
}

img{
    width: 50%;
    height: auto;
}
`
export const InputTime = styled.div`
width: 45%;


span{
    margin: 10px 0;
    font-weight: bold;
    color: #707070;
}
input{
    padding: 7px;
    border: none;
    width: 100%;
    border-bottom: 2px solid #AB47BC;
}
`
export const RegisterTime = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const Actions = styled.div`
    margin-top: 20px;
    width: 60%;
    display: flex;
    justify-content: space-between;



    span{
        font-weight: bold;
        margin-left: 5px;
        color:#AB47BC
    }

    input{
        border: 2px solid #AB47BC;
        background-color: #AB47BC;
    }
    
    button{
        border: none;
        background: none;
        display: flex;
        align-items: center;
        cursor: pointer;
        span{
            font-weight: bold;
        margin-left: 5px;
            color: red
        }
        &:hover{
            opacity: 0.7
        }
    }

    img{
        width: 15px
    }
`
export const Save = styled.div`
margin-top: 20px;
width:25%;

button{
    border-radius: 5px;
    border: none;
    padding: 5px;
background-color: #AB47BC;
width: 100%;
cursor: pointer;
&:hover{
            opacity: 0.7
        }
}
span{
    font-weight: bold;
    color: white;
}
`


export const Input = styled.div`
margin: 20px 0;
display: flex;
flex-direction: column;
width: 100%;

span{
    margin: 10px 0;
    font-weight: bold;
    color: #707070;
}
input{
    padding: 7px;
    border: none;
    border-bottom: 2px solid #AB47BC;
}
textarea{
    padding: 7px;
    border: 2px solid #AB47BC;
    border-radius: 5px
}
`

