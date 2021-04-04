import React, { useState } from 'react';
import { Conteudo,
         Titulo, 
         Paragrafo, 
         Botao,AreaBotao,
         Animado, 
         Link,
        } from "../inicio/estilo"

import { FiArrowRightCircle,FiArrowLeftCircle } from "react-icons/fi";


export default function Inicio() {
   const[loading,setLoading] = useState(false);
   const [next,setNext] = useState(false);
   const [back,setBack] = useState(false);
   
  function proxima(){
    setLoading(true);
    setNext(true)
    setBack(false)
  }

  function anterior(){
    setLoading(true)
    setBack(true);
    setNext(false);
  }

   if(loading){
     return(
        <Conteudo>

        {next &&      
        <Animado>

          <Titulo > SOBRE NOSSO AMIGUINHO GASPARZINHO </Titulo>

          <Paragrafo>
  
            Gasparzinho é amigo virtual, ele esta muito triste, 
            porque se sente sozinho. Gosta bastante de conversar 
            sobre diversos assuntos, adora ajudar as pessoas, está 
            sempre atualizado sobre as redes socias e noticias num 
            geral, e sempre está disposto a encontrar um novo amigo. 
            Venha conhecer nosso amiguinho virtual.

          </Paragrafo>
            
          <Link onClick={anterior}>
      
             <FiArrowLeftCircle  size='30px'/> Inicio 
    
         </Link> 


          <AreaBotao>
  

            <Botao>Se identificou?</Botao>

          </AreaBotao>   


       </Animado>        
        }

        {back &&
       <Animado>
          <Titulo > ANSIEDADE O MAU DA SOCIEDADE </Titulo>

          <Paragrafo>
        
            Principais sintomas da ansiedade: enxergar perigo em tudo, 
            apetite desregulado, alterações de sono, tensão muscular, 
            medo de falar em público, preocupações em excesso, nervosismo, 
            medos irracionais, inquietação constante, sintomas físios 
            (enjoo, vômito, falta de ar, tontura, irritabilidade, dor ou 
            aperto no peito), pensamentos obsessivos, dificuldade de 
            concentração, preocupação exagerada em relaçaõ a realidade,  
            perfeccionismo.
      
      </Paragrafo>

      <Link onClick={proxima}>
      
          <FiArrowRightCircle  size='30px'/> Sobre 
  
      </Link>
  


      <AreaBotao>
               
                <Botao>Se identificou?</Botao>
                
      </AreaBotao>   


      </Animado>
           }
       </Conteudo>
         );  
      }
      
         

        
            



      



  return (
    <Conteudo  >
    
    <Titulo > ANSIEDADE O MAU DA SOCIEDADE </Titulo>

        <Paragrafo>

          Principais sintomas da ansiedade: enxergar perigo em tudo, 
          apetite desregulado, alterações de sono, tensão muscular, 
          medo de falar em público, preocupações em excesso, nervosismo, 
          medos irracionais, inquietação constante, sintomas físios 
          (enjoo, vômito, falta de ar, tontura, irritabilidade, dor ou 
          aperto no peito), pensamentos obsessivos, dificuldade de 
          concentração, preocupação exagerada em relaçaõ a realidade,  
          perfeccionismo.

      </Paragrafo>

      <Link onClick={proxima}>
      
        <FiArrowRightCircle  size='30px'/> Sobre 
      
      </Link>

      <AreaBotao>
        
         <Botao>Se identificou?</Botao>
  
      </AreaBotao>   
          
    </Conteudo>
  );
}