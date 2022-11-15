import '../estilosComoponentes/contacto.css'
import React, { useState } from 'react'
import imggmail from '../img/ico/mailblanco.png'
import imglinekedin from '../img/ico/linkedinblanco.png'
import imggithub from '../img/ico/githubblanco.png'

export default function Contacto(){

    const miCorreo = 'calelyo@gmail.com'

    const noCopiar = (e) => e.stopPropagation();
    
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contenido, setContenido] = useState('');
    
    function enviarMail(){
        return "https://formsubmit.co/" + miCorreo
        // b295c99260179911e423ae28877b5c6f
    }

    function mail(){
        navigator.clipboard.writeText(miCorreo)
        alert("Mail de Calel Sprumont " + miCorreo + " copiado al portapapeles");
    }
    
    return(
        <section className='contacto' id='Contacto'>
            
            <div className='contacto-header'>
                <h1 className='contacto-titulo'>Contacto</h1>
            </div>

            <div className='formulario'>
                <form action={ enviarMail() } method='POST' target='_blank' rel='noopener noreferrer'>
                    <input className='input-formulario' type='text' name='nombre' id='nombre' placeholder='Nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} required></input>
                    <br/>

                    <input className='input-formulario' type='email' name='email' id='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                    <br/>

                    <textarea className='input-formulario' type='text' name='mensaje' id='mensaje' placeholder='Mensaje' value={contenido} onChange={(e)=> setContenido(e.target.value)} required></textarea>

                    <input type="hidden" name="_next" value="http://localhost:3000/"></input>

                    <input className='input-formulario boton-enviar' type='submit' value='Enviar'></input>
                </form>
            </div>

            <div className='contenedor-iconos-contacto'>
                
                <div className='contacto-email' onClick={()=> {mail()}}>
                    <a href='mailto:calelyo@gmail.com' target='_blank' rel="noopener noreferrer">
                        <img className='icono-contacto' src={imggmail} alt='icono email' onClick={noCopiar}></img>
                    </a>
                </div>

                <div className='contacto-linkedIn'>
                    <a href='https://www.linkedin.com/in/calelsprumont/' target='_blank' rel="noopener noreferrer">
                        <img className='icono-contacto' src={imglinekedin} alt='icono linkedIn' rel="noopener noreferrer"></img>
                    </a>
                </div>

                <div className='contacto-gitHub'>
                    <a href='https://github.com/Calelyo/' target='_blank' rel="noopener noreferrer">
                        <img className='icono-contacto' src={imggithub} alt='icono gitHub'></img>
                    </a>
                </div>

            </div>

        </section>
    )
}