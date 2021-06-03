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
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    img{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 0;
   } 
   section{
       animation: ${animacao} 1s;
       z-index: 1;
       text-align: center;
       display: flex;
       flex-direction: column;
       justify-content: space-around;
       align-items: center;
       padding: 34px 55px;
       background-color: rgba(0,0,0,0.7);
       border-radius: 23px;
   }
   .box{
       margin: 28px 0;
       text-align: center;
   }
  
   a{
       background-color: blue;
       padding: 10px 32px;
       border-radius: 17px;
   }
   a:hover{
       background-color: rgba(0,0,0,0.9);
       transition: 2s;
       border: 1px solid blue;
   }
   h2{
       font-weight: bold;
       color: #CCC;
   }
   h1{
       margin-top: 3px;
       font-weight: normal;
       color: white;
       font-style: italic;
   }
`