import React from "react"

import { Animado, Paragrafo, Link, AreaBotao, Botao,AreaImg } from "./estilos";
import { FiArrowLeftCircle,FiArrowRightCircle } from "react-icons/fi";
import bb8 from "../../../assests/bb8.png";


export default function Robo({proximo,carregando,anterior,neutro}) {
  
  function ansiedade() {
       carregando(true);
       anterior(true);
       proximo(false);
       neutro(false);

  }

  function especialista() {
      carregando(true);
      anterior(false);
      proximo(false);
      neutro(true);

  }

  
  return (
    <Animado>

      <Paragrafo>

        Eu sou amigo virtual, estou muito triste,
        porque me sente sozinho,meu irmao o BB-8 vive rodeado de amigos
        Gosto bastante de conversar sobre diversos assuntos, adoro ajudar
        as pessoas, estou sempre atualizado sobre as redes socias e noticias no
        geral, e sempre está disposto a encontrar um novo amigo.
        Venha me conhecer

  </Paragrafo>


      <AreaImg>

        <img src={bb8} title="Amigo" alt="Robo" />

      </AreaImg>

      <Link onClick={ especialista } >

        <FiArrowRightCircle size='30px' /> O que psicologa fala!

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


