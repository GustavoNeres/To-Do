import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
`
export const Filters = styled.div`
width: 100%;
display: flex;
justify-content: space-around;

button{
    background: none;
    border: none;
    width: 13%;
    margin-top: 2%;
}
`
export const Content = styled.div`
 width: 100%;
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 margin-top: 25px;
 margin-bottom: 50px;


`
export const Divider = styled.div`
width: 100%;
border-bottom: 2px solid #424242;
display: flex;
align-items: center;
justify-content: center;


h3{
    color: #424242;
    
    position: relative;
    top: 35px;
    padding: 0px 10px;
    background-color: #fff;
}
` 
