import styled, { keyframes } from 'styled-components';


export const Conteudo = styled.div` 
 display:flex;
 width:100%;
 flex-direction:column;
 justify-content:center;
 align-items:flex-start;
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



export const AreaBotao = styled.div`
 display:flex;
 width:90%;
 margin-top:-20px;
 margin-right:50px;
 flex-direction:row;
 justify-content:flex-end;
 height:100px;
 align-items:flex-end;
`;


export const Botao = styled.button`
  text-align:center;
  margin-bottom:60px;
  margin-right:50px;
  width: 268px;
  height: 62px;
  background: #f0e4d7;
  font-family:"Fira Sans",sans-serif;
  font-style: normal;
  font-weight: normal;
  border-radius:21px;
  font-size: 20px;
  line-height: 23px;
  cursor:pointer;
  font-weight:bold;
  transition:all 0.5s ease-in;
  :hover{
  width:290px;
  height:70px;
}

`;


export const Link = styled.button`
    display:flex;
    height:50%;
    margin-top:-20px;
    padding:8px;
    width:100%;
    color:#ff7171; 
    background-color:transparent;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    border:none!important;
    cursor:pointer;
    :hover{
       color:#f0e4d7;
  
    }

`;


export const AreaTexto = styled.div`
     display:flex;
     align-items:flex-start;
     flex-direction:column;
     align-items:center;
   

`;

export const AreaImg = styled.div`
      display:flex;
      width:100%;
      align-items:flex-end;
      justify-content:flex-start;
      
      img{
      background-color:#f0e4d7;   
      height:90px;
      width:150px;
      border-radius:50px;     
      margin-left:90px;   
      }
 
  
`;

export const Paragrafo = styled.p`
  display:flex;
  margin:20px;
  padding:20px;
  width:70%;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 27px;
  opacity:0.7;
  text-align:justify;
  align-items:left;
  background-color: #ff7171;
  color:#f0e4d7;
  border-radius:1px solid;
  border-bottom-right-radius:20px;
  border-top-left-radius:20px;
  border-top-right-radius:20px;

`;