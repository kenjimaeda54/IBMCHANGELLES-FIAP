import React from "react"

import { Animado, Paragrafo, Link, AreaBotao, Botao,AreaImg } from "./estilos";
import { FiArrowLeftCircle,FiArrowRightCircle } from "react-icons/fi";
import especialista from "../../../assests/especialista.jpg";


export default function Robo({proximo,carregando,anterior,neutro}) {
  
  function ansiedade() {
       carregando(true);
       anterior(true);
       proximo(false);
       neutro(false);

  }

  function sobre() {
      carregando(true);
      anterior(false);
      proximo(true);
      neutro(false);

  }

  
  return (
    <Animado>

      <Paragrafo>

         A ansiedade bloqueia milhares de pessoas ao nosso redor.
         Ela afeta no dia a dia, principalmente na forma de fazer as coisas
         é como se o tempo congelasse na minha cabeça, quando ocorre a crise de ansiedade,
         porque a cabeça so fica pensando naquilo, vindo diversos pensamentos,
         intrusivos. Ela faz com que não avance nos estudos, medo de rejeição
         naquilo que se almeja. Hoje em dia com ajuda de terapia e metodos
         exclusivos de tratemento ajudam a enfrentar esse problema de forma 
         muito mais saudavel e consicente, entendo o que fazer para se 
         disvencilhar, assim como muitas pessoas que passam por isso buscam esse 
         tipo de ajuda e se mostra eficiente com as práticas.
       
     </Paragrafo>


      <AreaImg>

        <img src={especialista} title="Psicologa" alt="Especialista" />

      </AreaImg>

      <Link onClick={ sobre } >

        <FiArrowRightCircle size='30px' /> Sobre VB-2!

      </Link>

      <Link onClick={ ansiedade }  >

        <FiArrowLeftCircle size='30px' /> Ansiedade!

      </Link> 


      <AreaBotao>


        <Botao>Se identificou?</Botao>

      </AreaBotao>


    </Animado>




  );
}

