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
    margin-top: -23px;
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
    padding: 0 100px;
    flex-direction: column;
    background-color: rgba(0,0,0,0.3);
    box-shadow: 10px 10px 10px rgba(0,0,0,0.5);
    border-radius: 13px;
    margin-top: 20px;
    
   h2{
       margin: 17px 0;
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
   input, select{
       background-color: #CCC;
       border-radius: 10px;
   }
   select{
       margin-top: 17px;
       margin-bottom: 8px;
       width: 100%;
       max-width: 223px;
       padding: 11px 0;
       color: black;
       font-size: 18px;
       color: rgb(78, 78, 78);
       font-weight: normal;
   }
`