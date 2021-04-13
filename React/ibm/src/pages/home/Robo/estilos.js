import styled, { keyframes } from 'styled-components';


export const Conteudo = styled.div` 
 display:flex;
 width:100%;
 flex-direction:column;
 justify-content:center;
 align-items:center;

 @media(max-width:800px){
  .container{
     justify-content:center;
     align-items:center;
  }

 }
  
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


export const AreaBotao = styled.div`
 display:flex;
 width:30%;
 flex-direction:row;
 justify-content:flex-start;
 align-items:flex-start;
 align-self:end;
 height:100px;
 align-items:flex-end;
 margin-top:-100px;
  a{ 
  
  text-decoration:none;  
  text-align:center;
  display:flex;
  align-items:center;
  justify-content:center;   
  width: 268px;
  height: 62px;
  background: #f0e4d7;
  font-family:"Fira Sans",sans-serif;
  font-style: normal;
  font-weight: normal;
  border-radius:21px;
  font-size: 20px;
  line-height: 23px;
  color:#ff7171; 
  cursor:pointer;
  font-weight:bold;
  transition:all 0.5s ease-in;
  :hover{
  width:290px;
  height:70px;

  }
  }
@media(max-width:800px){
 button{
  width: 68px;
  height: 10px;      
 }

 a{
   
  width: 68px;
  height: 20px;
  font-size:12px;
  line-height:17px;
  border-radius:5px;
 }

}


`;


export const Icon = styled.button`
    display:flex;
    margin-top:20px;
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
    @media(max-width:800px){
       a{
          margin-top:25px;
       }
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
      align-items:flex-start;
      justify-content:flex-start;
      width:100%;
      margin-top:40px;
      
      img{
      background-color:#f0e4d7;   
      height:90px;
      width:150px;
      border-radius:50px;  
      margin-left:50px;
      margin-top:-50;
      }
   
   @media(max-width:800px){

    img{

       height:40px;
       width:80px;
       border-radius:5px;
       margin-left:4px;

    }

   }
  
`;

export const Paragrafo = styled.p`
  display:flex;
  margin-top:100px;
  padding:20px;
  width:70%;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 31px;
  opacity:0.7;
  text-align:justify;
  align-items:left;
  background-color: #ff7171;
  color:#f0e4d7;
  border-radius:1px solid;
  border-bottom-right-radius:20px;
  border-top-left-radius:20px;
  border-top-right-radius:20px;

 @media(max-width:800px){
    font-size:15px;
    line-height:18px;
    margin-top:100px;  
 } 

`;