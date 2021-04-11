import React, { useState } from "react"


import './estilos.css'
import api from "../../../services/api"
import bb8 from "../../../assests/bb8.png"


export default function Conversa() {
    const [user, setUser] = useState('')
    const [boot, setBoot] = useState('')
    const [input, setInput] = useState('')




    async function send() {
        setUser(input)
        if (input === '') {
            alert('Voce não digitou nada')
            return;
        }
        try {
            const response = await api.get(`/?mensagem=${input}`);
            setBoot(response.data)
        } catch (error) {
            alert(error)
        }


    }



    return (
        <div className="container">
            { user &&
                <div>

                    <text className="textUser" > {user} </text>

                </div>
            }
            { boot &&
                <div>
                    <img src={bb8} title="bb8" alt="amiguinho" className="textBoot img" />
                    <text className="textBoot" > {boot} </text>


                </div>
            }


            <div className="areaInput">

                <input
                    type="text"
                    placeholder="digite algo para conversarmos"
                    value={input}
                    onChange={(item) => setInput(item.target.value)}
                    className="input"
                />
                <button className="button" onClick={send} >
                    Enviar
           </button>

            </div>

        </div>

    );



}