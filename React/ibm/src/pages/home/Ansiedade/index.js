import React from "react"

import { Animado,Paragrafo,Link,Botao,AreaBotao,AreaImg } from "./estilos"
import {FiArrowLeftCircle,FiArrowRightCircle} from "react-icons/fi"
import bb8 from "../../../assests/bb8.png"



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
   
   <Animado>
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
    
  <Link  onClick={ sobre }>
  
      <FiArrowRightCircle  size='30px'/> Sobre VB-2!

  </Link>

  <Link  onClick={ profissional  } >
  
       <FiArrowLeftCircle  size='30px'/> O que psicologa fala!

  </Link>




  <AreaBotao>
           
            <Botao>VB-2</Botao>
            
  </AreaBotao>   


  </Animado>
       
     
  );
}