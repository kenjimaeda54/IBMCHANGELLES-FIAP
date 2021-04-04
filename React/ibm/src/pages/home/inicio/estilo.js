import styled, { keyframes } from 'styled-components';


export const Conteudo = styled.div` 
 display:flex;
 width:100%;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 height:100vh;

 `;

const animate = keyframes`
 from{
    opacity:0;
    left:0;
    
  }
  to{
    opacity:0.2;
    left:1000px;
  }
`;



export const Animado = styled.div`
 
 display:flex;
 position:relative;
 flex-direction:column;
 align-items:center;
 animation:${animate} 4s linear ;
 
  
`;
export const Corpo2 = styled.div`
 
 display:flex;
 position:relative;
 flex-direction:column;
 align-items:center;
 animation:${animate} 4s linear ;
 
  
`;

export const Titulo = styled.h1`
  width:100%;
  text-align:center;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 58px;
  height:100px;
  text-shadow:1px 1px 0px #fff;
`;

export const Paragrafo = styled.p`
  display:flex;
  width:70%;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 31px;
  opacity:0.7;
  text-align:justify;
  align-items:center;
`;


export const AreaBotao = styled.div`
 display:flex;
 width:90%;
 flex-direction:row;
 justify-content:flex-end;
 height:100px;
 align-items:flex-end;
`;


export const Botao = styled.button`
  text-align:center;
  width: 268px;
  height: 62px;
  background: #B5B5B5;
  font-family:"Fira Sans",sans-serif;
  font-style: normal;
  font-weight: normal;
  border-radius:21px;
  font-size: 20px;
  line-height: 23px;
  cursor:pointer;
  transition:all 0.5s ease-in;
  :hover{
  background-color: #EEB422;
            color:white; 
  width:290px;
  height:70px;
  color:black;
}

`;


export const Link = styled.button`
    display:flex;
    margin-top:20px;
    background-color:transparent;
    flex-direction:row;
    text-align:'center';
    align-items:center;
    border:none!important;
    cursor:pointer;
    :hover{
       color:#EEB422;
    }

`;
