import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

body, html, #root{
    height: 100%;
    background-color: purple;
}
body, html, input, button, a, div, h1, h2, h3, li, textarea, button, select{
    color: #CCC;
    font-weight: normal;
    font-family: Arial, Helvetica, sans-serif;
    border: 0;
    outline: 0;
    text-decoration: none;
    list-style-type: none;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
#root{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
}
button, a{
    cursor: pointer;
}

`
