import styled from 'styled-components'

export const Container = styled.section`
    background-color: rgba(0,0,0,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 999;

    .box{
        padding: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #CCC;
        border-radius: 13px;
    }
    button{
        background-color: blue;
        padding: 10px 23px;
        margin: 13px;
        border-radius: 23px;
    }
    button:hover{
        background-color: purple;
        transition: 2s;
        border: 1px solid purple;
    }
    h2{
        color: blue;
    }
`