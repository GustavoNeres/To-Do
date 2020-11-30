import styled from 'styled-components'

export const barHeader = styled.div`
width: 100%;
background: #424242;
color: white; 
border-bottom: 10px solid #AB47BC;
display: flex;
`
export const left = styled.div`
width: 50%;

img{
   width: 8%;
   height: auto; 
   margin-left: 1%;
   margin-top: 1%;
   margin-bottom: 1%;
}

`
export const rigth = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-around;

img{
   width: 35%;
   height: auto;
}

a{
    
    font-weight: bold;
    text-decoration: none;
    color: #fff
}

span{
    font-size: 10pt;
    background-color: #AB47BC;
    color: #fff;
    padding: 2px 6px;
    border-radius: 50%;
    position: relative;
    top: -12px;
    right: 10px;
}
`

