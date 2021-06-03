import styled, {keyframes} from 'styled-components' 

const animacao = keyframes`
    from{ 
        transform: translateX(108%)
    }
    to{
        transform: translateX(0px)
    }

`
export const ContainerListar = styled.section`
    background-color: rgba(0,0,0,0.4);
    padding: 20px 80px;
    max-width: 100%;
    margin-bottom: 38px;
    text-align: center;

    .titulo{
        text-align: center;
        font-weight: bold;
        font-style: italic;
        color: #CCC;
        font-size: 32px;
    }
`
export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 28px;
    background-color: rgba(0,0,0,0.7);
    width: 500px;
    max-width: 150%;
    align-items: center;
    margin: 8px auto;

    img{
        width: 38px;
        height: 38px;
        border-radius: 50%;
        position: relative;
      
    }
    button{
        margin: 0 5px;
    }
    h2{
        font-weight: normal;
        font-style: normal;
        color: white;
    }
    button{
        background-color: transparent;
    }

    @media (max-width: 500px) {
    flex-direction: column;

    h2{
        font-size: 15px;
    }
  }
`
export const Container = styled.section`
    text-align: center;
    .capa{
        position: absolute;
        width: 100%;
        height: 238%;
        left: 0;
        top: 0;
        z-index: 1;
   } 
   a{
        background-color: blue;
        padding: 10px 23px;
        color: white;
        position: relative;
        z-index: 99;
        border-radius: 21px;
        bottom: 58px;
    }
    a:hover{
        background-color: rgba(0,0,0,0.4);
        transition: 2s;
        border: 1px solid #CCC;
    }

`

export const BoxContainer = styled.section`
    animation: ${animacao} 1s;
    position: relative;
    z-index: 2;

`
export const H2 = styled.h2`
    position: relative;
    z-index: 99;
    margin: 23px 0;

    a{
        margin-left: 10px;
        background-color: blue;
        padding: 5px 13px;
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

    @media (max-width: 500px) {
        display: flex;
    flex-direction: column;
  }
  
`
