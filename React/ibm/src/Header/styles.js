import styled from "styled-components";


export const Conteudo = styled.div`
display:flex;
width:100%;
height:50px;
`;

export const Cabeçario = styled.nav`
    display:flex;
    width:80%;
    height:50px;
    flex-direction:row;
    align-items:center;
    justify-content:flex-end;
  ul{
    list-style:none;  
  }  
`;

export const Lista = styled.li`
    display:flex;
    width:30%;
    flex-direction:row;
    justify-content:space-around;
  a  {
      text-decoration:none;
      color:black;
      transition:1s   
     }
   a:hover{
     text-decoration:underline;
     color: #EEB422;
     font-size:150%;
   }
  `;
