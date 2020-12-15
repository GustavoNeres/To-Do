import styled from 'styled-components'

export const Container = styled.div`
width: 16%;
color: white; 
background-color: #424242;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
box-shadow: 0px 1px 15px -2px rgba(0,0,0,0.75);
border-radius: 5px;
padding: 1%;
margin: 1.5% 2.5%;
cursor: pointer; 
transition: all 0.2s ease;

&:hover{
    opacity: 0.9;
}

a{
    width: 100%;
    text-decoration: none;
    color: #fff
}
`
export const TopCard = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

h3{
    
    color: #AB47BC;
}
`
export const botCard = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;

strong{
    
    font-weight: bold;
}
span{
     
}
`