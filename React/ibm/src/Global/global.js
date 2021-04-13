import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
    margin:0px;
    padding:0px;
    outline:0px;
}
html,body #root{
    min-height:100%
}
body{
    background: #9fd8df;
    font-size: 1.6rem;
    font-family:"Fira Sans",sans-serif;
    line-height: 1.8;
    -webkit-font-smoothing: antialiased !important;
}
body,input,button{
    color: #ff7171;
    font-weight:bold;
    font-size:14px;
    font-family:"Fira Sans",sans-serif;
}
`
