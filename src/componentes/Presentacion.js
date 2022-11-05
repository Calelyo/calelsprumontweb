import '../estilosComoponentes/presentacion.css'
import React from "react";
import presentacion from '../img/Presentacion5.png';
import SobreMi from './SobreMi';
import imgsobremi from '../img/sobremi.jpg'
import imgsobremiSF from '../img/sobremiSF.png'
import imgsobremiSFredondo from '../img/sobremiSFredondo.png'
import imgsobremi2 from '../img/SobreMi2.png'
import { useModal } from '../hooks/useModal.js';

export default function Presentacion(){
    const [modalAbiertoSobreMi, abrirModalSobreMi, cerrarModalSobreMi] = useModal(false)
    return(
        <section className='presentacion' id='Presentacion'>
            
            
            <div className='diagonal'></div>

            <div className='infoPresentacion'>
                <div className='a'>
                    <img src={presentacion} alt='Foto precentación' className='fototemp'></img>
                </div>
                <div className='frase-boton'>
                    <p>El trabajo en equipo es un ejemplo de como El Todo es Más Que la Suma de las Partes</p>
                </div>
                <button onClick={ abrirModalSobreMi }>Sobre Mi</button>
            </div>
            
               <SobreMi modalAbierto={ modalAbiertoSobreMi } cerrarModal={ cerrarModalSobreMi }>
                {/* <h1>
                    Sobre Mi
                </h1> */}
                <div className='contenidoModal'>
                    <img src={imgsobremi2} alt='Foto Sobre mi'></img>
                    <p>
                        Crecí en <b>Andacollo</b>, provincia de Neuquén, por falta de oferta académica, terminado el secundario, me tuve que mudar para continuar mis estudios.
                        Actualmente vivo en General Roca, Río Negro, donde, estudiando la <b>Licenciatura en Diseño Visual</b> comencé a interesarme por el propio concepto de diseño.
                        Cuando me sumergí en la programación noté la gran similitud conceptual entre ésta y la carrera que estaba estudiando.
                        Encontrar <b>soluciónes prácticas</b> a problemas puntuales. Esto es lo que me gusta, a lo que me dedico, y es la tarea a la que me quiero dedicar profecionalmente.
                    </p>
                </div>
               </SobreMi>
        </section>
    )
}