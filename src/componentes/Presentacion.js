import '../estilosComoponentes/presentacion.css'
import React from "react";
import presentacion from '../img/Presentacion.png';
import SobreMi from './SobreMi';
import imgsobremi from '../img/SobreMi.jpg'
import { useModal } from '../hooks/useModal.js';

export default function Presentacion(){
    const [modalAbiertoSobreMi, abrirModalSobreMi, cerrarModalSobreMi] = useModal(false)
    return(
        <section className='presentacion' id='Presentacion'>
            
            <div className='info-presentacion'>
                
                <div className='info-texto-presentacion'>

                    <div className='mi-info'>
                        <h1 className='mi-nombre'>CALEL SPRUMONT</h1>
                        <h1 className='mi-trabajo'>DESARROLADOR FULL STACK</h1>
                    </div>

                    <div className='boton-presentacion'>
                        <button onClick={ abrirModalSobreMi }>Sobre Mí</button>
                    </div>

                    <div className='frase-presentacion'>
                        <p>
                            El trabajo en equipo es un ejemplo de como el todo es más que la suma de las partes
                        </p>
                    </div>

                 </div>

                <picture className='contenedor-foto-presentacion'>
                     <img src={presentacion} alt='Foto presentación' loading='lazy' className='foto-presentacion'></img>
                 </picture>
            </div>


            {/* ---------- MODAL ---------- */}            
            <SobreMi modalAbierto={ modalAbiertoSobreMi } cerrarModal={ cerrarModalSobreMi }>
                <div className='contenido-modal'>
                    <img src={ imgsobremi } alt='Foto Sobre mi' loading='lazy'></img>
                        <p>
                            Crecí en <b>Andacollo</b>, provincia de Neuquén, por falta de oferta académica, terminado el secundario, me tuve que mudar para continuar mis estudios.
                            Actualmente vivo en General Roca, Río Negro, donde, estudiando la <b>Licenciatura en Diseño Visual</b> comencé a interesarme por el propio concepto de diseño.
                            Cuando me sumergí en la programación noté la gran similitud conceptual entre ésta y la carrera que estaba estudiando.
                            Encontrar <b>soluciones prácticas</b> a problemas puntuales. Esto es lo que me gusta, a lo que me dedico, y es la tarea a la que me quiero dedicar profesionalmente.
                        </p>
                </div>
            </SobreMi>

        </section>
    )
}