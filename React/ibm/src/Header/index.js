import React from 'react'
import { Link } from 'react-router-dom'
import { Conteudo, Cabecario, Lista } from './styles'

export default function Header() {
    return (
        <Conteudo id='header'>
            <Cabecario>
                <Lista>
                    <Link to='/'>Inicio</Link>
                    <Link to=''>Feedback</Link>
                </Lista>
            </Cabecario>
        </Conteudo>
    )
}