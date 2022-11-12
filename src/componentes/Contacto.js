import '../estilosComoponentes/contacto.css'
import React, { useState } from 'react'
import imggmail from '../img/ico/mailblanco.png'
import imglinekedin from '../img/ico/linkedinblanco.png'
import imggithub from '../img/ico/githubblanco.png'

export default function Contacto(){

    const miCorreo = 'calelyo@gmail.com'

    const noCopiar = (e) => e.stopPropagation();

    function enviarMail(){
        return "https://formsubmit.co/" + miCorreo
        // b295c99260179911e423ae28877b5c6f
    }

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contenido, setContenido] = useState('');

    let mimail = 'calelyo@gmail.com';

    function mail(){
        navigator.clipboard.writeText(mimail)
        alert("Mail de Calel Sprumont " + mimail + " copiado al portapapeles");
    }
    
    return(
        <section className='contacto' id='Contacto'>

        <div className='diagonal2'></div>

            <div className='contactoHeader'>
                <h1>Contacto</h1>
            </div>

            <div className='formulario'>
                <form action={ enviarMail() } method='POST' target='_blank' rel='noopener noreferrer'>
                    <input className='inputForm' type='text' name='nombre' id='nombre' placeholder='Nombre'  value={nombre} onChange={(e) => setNombre(e.target.value)} required></input>
                    <br/>

                    <input className='inputForm' type='email' name='email' id='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                    <br/>

                    <textarea className='inputForm' type='text' name='mensaje' id='mensaje' placeholder='Mensaje' value={contenido} onChange={(e)=> setContenido(e.target.value)} required></textarea>
                    <input type="hidden" name="_next" value="http://localhost:3000/"></input>
                    <br/>

                    <input className='inputForm botonEnviar' type='submit' value='Enviar'></input>
                </form>
            </div>

            <div className='contenedorIconosContacto'>
                
                <div className='contactoEmail' onClick={()=> {mail()}}>
                    <a href='mailto:calelyo@gmail.com' target='_blank' rel="noopener noreferrer">
                        <img className='iconoContacto' src={imggmail} alt='icono email' onClick={noCopiar}></img>
                    </a>
                </div>

                <div className='contactoLinkedIn'>
                    <a href='https://www.linkedin.com/in/calelsprumont/' target='_blank' rel="noopener noreferrer">
                        <img className='iconoContacto' src={imglinekedin} alt='icono linkedIn' rel="noopener noreferrer"></img>
                    </a>
                </div>

                <div className='contactoGitHub'>
                    <a href='https://github.com/Calelyo/' target='_blank' rel="noopener noreferrer">
                        <img className='iconoContacto' src={imggithub} alt='icono gitHub'></img>
                    </a>
                </div>

            </div>
        </section>
    )
}