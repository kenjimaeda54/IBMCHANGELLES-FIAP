import React from "react"
import { HashLink as Link } from "react-router-hash-link";
import { Conteudo, Cabeçario, Lista } from "./styles"


export default function Header() {
    return (
        <Conteudo id="header" >
            <Cabeçario>
                <Lista>
                    <Link smooth to="#header">Inicio</Link>
                    <Link smooth to="#sobre">Sobre</Link>
                </Lista>
            </Cabeçario>
        </Conteudo>
    );
}