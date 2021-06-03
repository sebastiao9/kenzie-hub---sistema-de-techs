import styled, {keyframes} from 'styled-components' 

const animacao = keyframes`
    from{ 
        transform: translateX(108%)
    }
    to{
        transform: translateX(0px)
    }

`
export const Error = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
    animation: ${animacao} 1s;

    img{
        width: 713px;
        max-width: 100%;
        margin: 43px 0;
    }
    a{
        background-color: #CCC;
        color: black;
        padding: 8px 28px;
        margin: 0 10px;
        border-radius: 20px;
    }
    a:hover{
        background-color: purple;
        border: 1px solid #CCC;
        transition: 2s;
        color: #CCC;
    }

`