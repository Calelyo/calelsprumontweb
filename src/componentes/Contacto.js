import '../estilosComoponentes/contacto.css'
import React, { useState } from 'react'
import imggmail from '../img/ico/mail.png'
import imglinekedin from '../img/ico/linkedin.png'

export default function Contacto(){

    const miCorreo = 'calelyo@gmail.com'

    function enviarMail(){
        return "https://formsubmit.co/" + miCorreo
    }

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contenido, setContenido] = useState('');

    /*
    console.log('Nombre: ' + nombre)
    console.log('Email: ' + email)
    console.log('Contenido: ' + contenido)
    */

    return(
        <section className='contacto' id='Contacto'>
            <div className='contactoHeader'>
                <h1>Contacto</h1>
            </div>

            <div className='formulario'>
                <form action={ enviarMail() } method='POST' target='_blank'>
                    {/*
                    <label htmlFor='nombre'>Nombre</label>
                    <br/>
                    */}
                    <input className='inputForm' type='text' name='nombre' id='nombre' placeholder='Nombre'  value={nombre} onChange={(e) => setNombre(e.target.value)} required></input>
                    <br/>

                    {/*<label htmlFor='email'>Email</label>
                    <br/>*/}
                    <input className='inputForm' type='email' name='email' id='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                    <br/>

                    {/*
                    <label htmlFor='mensaje'>Mensaje</label>
                    <br/>
                    */}
                    <textarea className='inputForm' type='text' name='mensaje' id='mensaje' placeholder='Mensaje' value={contenido} onChange={(e)=> setContenido(e.target.value)} required></textarea>
                    <input type="hidden" name="_next" value="http://localhost:3000/"></input>
                    <br/>

                    <div className='cuadro2'></div>

                    <input className='inputForm botonEnviar' type='submit' value='Enviar'></input>
                </form>
            </div>

            <div className='contenedorIconosContacto'>
                <div className='contactoEmail'>
                    <a href='mailto:calelyo@gmail.com' target='_blank' rel="noreferrer">
                        <img className='.iconoContacto' src={imggmail} alt='Email'></img>
                    </a>
                    <p>calelyo@gmail.com</p>
                </div>

                <div className='contactoLinkedIn'>
                    <a href='https://www.linkedin.com/in/calelsprumont/' target='_blank' rel="noreferrer">
                        <img className='.iconoContacto' src={imglinekedin} alt='LinkedIn'></img>
                    </a>
                    <p>linkedin.com/in/calelsprumont/</p>
                </div>
            </div>
        </section>
    )
}