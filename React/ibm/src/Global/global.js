import {createGlobalStyle} from "styled-components";


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
    background:#B9D3EE;
    font-size: 1.6rem;
    font-family:"Fira Sans",sans-serif;
    line-height: 1.8;
    -webkit-font-smoothing: antialiased !important;
}
body,input,button{
    color: #222;
    font-size:14px;
    font-family:"Fira Sans",sans-serif;
}
`;