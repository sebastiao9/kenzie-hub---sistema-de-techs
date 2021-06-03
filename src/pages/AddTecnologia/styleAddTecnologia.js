import styled, {keyframes} from 'styled-components' 

const animacao = keyframes`
    from{ 
        transform: translateX(108%)
    }
    to{
        transform: translateX(0px)
    }

`
export const Container = styled.section`
text-align: center;
    a{
        background-color: blue;
        padding: 10px 23px;
        color: white;
        position: relative;
        z-index: 99;
        top: -19px;
        border-radius: 21px;
    }
    a:hover{
        background-color: rgba(0,0,0,0.4);
        transition: 2s;
        border: 1px solid #CCC;
    }
section{
       animation: ${animacao} 1s;
       z-index: 1;
       background-color: rgba(0,0,0,0.4);
       position: relative;
       padding: 1px 38px;
   }

     img{
        position: absolute;
        width: 100%;
        height: 178%;
        left: 0;
        top: 0;
        z-index: 1;
   } 
   button{
       position: relative;
       z-index: 2;
       background-color: blue;
       padding: 10px 32px;
       border-radius: 17px;
   }
   button:hover{
       background-color: rgba(0,0,0,0.9);
       transition: 2s;
       border: 1px solid blue;
   }
`
export const Box = styled.div`
    margin: 58px 0;
    position: relative;
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;

    h2{
        text-align: center;
        position: relative;
        left: 50%;
        top: -123px;
        font-weight: bold;
        font-style: italic;
        color: #CCC;
    }
    img{
        position: relative;
        z-index: 2;
        width: 53px;
        height: 53px;
        border-radius: 50%;
        background-color: transparent;
        border: none;
        margin: 0 13px;
    }
    button:hover{
        background-color: #CCC;
        border: 1px solid #CCC;
        color: black;
    }
    button, input{
        background-color: transparent;
        padding: 0;
        border: 1px solid #CCC;
        padding: 3px 10px;
    }
    .stack{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        background-color: rgba(0,0,0,0.7);
        padding: 10px;
        margin: 20px;
        flex-wrap: wrap;
        border-radius: 23px;
    }
    .stack img,
    .stack button, 
    .stack ::selection{
        margin: 17px 0;
    }
    select{
        background-color: rgba(0,0,0,0.3)
    }
    select:hover{
        background-color: rgba(0,0,0,0.3);
        color: rgb(57, 57, 57);
    }
    label{
        position: relative;
        top: 13px;
    }
    form{
        display: flex;
        flex-direction: column;
    }
`
export const H2 = styled.h2`
    position: relative;
    z-index: 99;
    margin: 23px 0;

    a{
        margin-left: 10px;
        background-color: blue;
        padding: 5px 19px;
        color: white;
        z-index: 99;
        border-radius: 21px;
        font-size: 17px;
    }
    a:hover{
        background-color: rgba(0,0,0,0.4);
        transition: 2s;
        border: 1px solid #CCC;
    }
`
