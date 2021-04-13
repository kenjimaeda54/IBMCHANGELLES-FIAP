import React, {  useState } from 'react';
import {
  Conteudo,
  Paragrafo,
   AreaBotao,
  Icon,
  AreaTexto,
  AreaImg,
} from "./estilo.js";

import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import bb8 from "../../../assests/bb8.png";
import { Link } from "react-router-dom";




import Ansiedade from "../Ansiedade"
import Especialista from "../Especialista"
import Robo from "../Robo"



export default function Inicio() {
  const [loading, setLoading] = useState(false);
  const [next, setNext] = useState(false);
  const [back, setBack] = useState(false);
  const [neutro, setNeutro] = useState(false);

  function proximo() {
    setLoading(true);
    setNext(true)
    setBack(false)
  }

  function anterior() {
    setLoading(true)
    setBack(true);
    setNext(false);
  }


  if (loading) {
    return (
      <div>

        {next &&

          < Robo carregando={setLoading}
            proximo={setNext}
            anterior={setBack}
            neutro={setNeutro}
          />

        }
        {back &&


          < Ansiedade carregando={setLoading}
            proximo={setNext}
            anterior={setBack}
            neutro={setNeutro}
          />


        }
        { neutro &&


          <  Especialista carregando={setLoading}
            proximo={setNext}
            anterior={setBack}
            neutro={setNeutro}
          />

        }


      </div>

    );

  }






  return (
    <Conteudo className="container" >

      <AreaTexto>

        <Paragrafo>

          Oi, seja bem vindo(a). Meu nome é VB-2 sou irmão do BB-8, isso mesmo,
          meu irmão é famoso, participou do filme do Star Wars.
          Meu sonho é participar da comunidade onde todos ajudam um ao outro
          e não sintam mais sozinhos. Se desejar conhecer mais sobre ANSIEDADE,
          algo que me afeta constantemente, clique nas setas abaixo ou no
          botão para conversar comigo.

      </Paragrafo>

      </AreaTexto>

      <AreaImg>

        <img src={bb8} title="Amigo" alt="Robo" />

      </AreaImg>

      <Icon onClick={proximo}>

        <FiArrowRightCircle size='30px' /> Sobre VB-2!

      </Icon>

      <Icon onClick={anterior}>

        <FiArrowLeftCircle size='30px' /> Ansiedade

      </Icon>

      <AreaBotao className="button">

        <Link to='/conversa' >
       
       
          VB-2
        
        </Link>

      </AreaBotao>

    </Conteudo >
  );
}