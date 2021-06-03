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
    flex-direction: column;
    overflow-y: scroll;
    margin-top: 87px;

   img{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 0;
        
   } 
`
export const Formulario = styled.form`
    animation: ${animacao} 1s;
    position: relative;
    z-index: 1;
    display: flex;
    padding: 80px;
    flex-direction: column;
    background-color: rgba(0,0,0,0.3);
    box-shadow: 10px 10px 10px rgba(0,0,0,0.5);
    border-radius: 13px;
    
   h2{
       margin-bottom: 53px;
       font-size: 32px;
       font-weight: bold;
   }
   button{
       background-color: blue;
       padding: 10px 17px;
       color: white;
       width: 150px;
       margin: 17px auto;
       border-radius: 20px;
   }
   button:hover{
       background-color: rgba(0,0,0,0.7);
       transition: 2s;
   }
   p, a{
       color: white;
   }
   a{
       font-weight: bold;
       font-style: italic;
   }
   a:hover{
       text-decoration: underline;
       transition: 2s;
   }
   input{
       background-color: #CCC;
       border-radius: 10px;
   }
`