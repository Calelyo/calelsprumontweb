import '../estilosComoponentes/presentacion.css'
import React from "react";
import presentacion from '../img/Presentacion.png';
import SobreMi from './SobreMi';
import imgsobremi2 from '../img/SobreMi2.png'
import { useModal } from '../hooks/useModal.js';

export default function Presentacion(){
    const [modalAbiertoSobreMi, abrirModalSobreMi, cerrarModalSobreMi] = useModal(false)
    return(
        <section className='presentacion' id='Presentacion'>
            
            
            <div className='diagonal'></div>

            <div className='infoPresentacion'>
                <div>
                    <picture>
                        <img src={presentacion} alt='Foto presentación' loading='lazy' className='fototemp'></img>
                    </picture>
                </div>
                <div className='frase-boton'>
                    <p>
                        El <span className='destacado-en-frase1'>trabajo en equipo </span>  
                        es un ejemplo de como <span className='destacado-en-frase2'>
                            el <span className='todo'>todo </span> 
                            es <span className='mas'>más </span> que la <span className='suma'>suma de las partes</span>
                        </span>
                    </p>
                </div>
                <button onClick={ abrirModalSobreMi }>Sobre Mí</button>
            </div>
            
               <SobreMi modalAbierto={ modalAbiertoSobreMi } cerrarModal={ cerrarModalSobreMi }>
                <div className='contenidoModal'>
                    <img src={imgsobremi2} alt='Foto Sobre mi' loading='lazy'></img>
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