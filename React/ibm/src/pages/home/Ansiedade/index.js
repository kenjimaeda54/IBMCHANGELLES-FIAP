import React from "react"

import { Animado,Paragrafo,Icon,AreaBotao,AreaImg } from "./estilos"
import {FiArrowLeftCircle,FiArrowRightCircle} from "react-icons/fi"
import bb8 from "../../../assests/bb8.png"
import { Link  } from "react-router-dom";



export default function Ansiedade({proximo,carregando,anterior,neutro}) {

 function sobre(){
     proximo(true);
     carregando(true);
     anterior(false);
     neutro(false);

 }
 
 function profissional() {
     proximo(false);
     carregando(true);
     anterior(false);
     neutro(true);

 }

 


 return( 
   
  <Animado className="container">
      <Paragrafo>
      
      <h3>
        Ansiedade esta relacionada diretamente a alguns 
        sintomas:
      
      </h3>
      
      <ol>  
         
 
      <li>   apetite desregulado   </li>        
      <li>   alterações de sono    </li>
      <li>   tensão muscular        </li>
      <li>   medo de falar em público </li>
      <li>   preocupações em excesso</li>
      <li>   nervosismo </li>
      <li>   medos irracionais </li>
      <li>   inquietação constante </li>
      <li>   pensamentos obsessivos </li>

           
      </ol>   
        
  
  </Paragrafo>

   <AreaImg>

        <img src={bb8} title="Amigo" alt="Robo" />

  </AreaImg>       
    
  <Icon  onClick={ sobre }>
  
      <FiArrowRightCircle  size='30px'/> Sobre VB-2!

  </Icon>

  <Icon onClick={ profissional  } >
  
       <FiArrowLeftCircle  size='30px'/> O que psicologa fala!

  </Icon>

  <AreaBotao className="button">

     <Link to='/conversa' >

       VB-2

     </Link>

   </AreaBotao> 

  </Animado>
       
     
  );
}