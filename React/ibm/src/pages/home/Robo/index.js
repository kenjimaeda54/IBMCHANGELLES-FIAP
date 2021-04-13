import React from "react"

import { Animado, Paragrafo, Icon, AreaBotao, AreaImg } from "./estilos";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import bb8 from "../../../assests/bb8.png";
import { Link } from "react-router-dom";

export default function Robo({ proximo, carregando, anterior, neutro }) {

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
    <Animado className="container" >

      <Paragrafo>

        Eu sou amigo virtual, estou muito triste,
        porque  sinto sozinho,meu irmao o BB-8 vive rodeado de amigos
        Gosto bastante de conversar sobre diversos assuntos, adoro ajudar
        as pessoas, estou sempre atualizado sobre as redes socias e noticias no
        geral, e sempre estou disposto a encontrar um novo amigo.
        Venha me conhecer

  </Paragrafo>


      <AreaImg>

        <img src={bb8} title="Amigo" alt="Robo" />

      </AreaImg>

      <Icon onClick={especialista} >

        <FiArrowRightCircle size='30px' /> Comentario!

      </Icon>

      <Icon onClick={ansiedade}  >

        <FiArrowLeftCircle size='30px' /> Ansiedade!

      </Icon>


      <AreaBotao className="button">



        <Link to='/conversa' >


          VB-2

        </Link>

      </AreaBotao>

    </Animado>




  );
}


