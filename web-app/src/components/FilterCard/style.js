import styled from 'styled-components'

export const filterCard = styled.div`
width: 100%;
background: ${props => props.active ? '#424242' :  '#AB47BC'};
color: white; 
padding: 0% 1%;
display: flex;
margin: 1%;
align-items: center;
justify-content: space-evenly;
border-radius: 5px;
cursor: pointer;
img{
    width: 13%;
    height: auto;
}
p{
    
    font-weight: bold
}
&:hover{
    background: #424242;
}
`


