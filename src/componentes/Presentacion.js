import '../estilosComoponentes/presentacion.css'
import React from "react";
import presentacion from '../img/Presentacion.jpg';
import SobreMi from './SobreMi';
import imgsobremi from '../img/sobremi.jpg'
import { useModal } from '../hooks/useModal.js';

export default function Presentacion(){
    const [modalAbiertoSobreMi, abrirModalSobreMi, cerrarModalSobreMi] = useModal(false)
    return(
        <section className='presentacion' id='Presentacion'>
            
            
            <div className='diagonal'></div>

            <div className='infoPresentacion'>
                <img src={presentacion} alt='Foto precentación' className='fototemp'></img>
                <div className='frase-boton'>
                    <p>El trabajo en equipo es un ejemplo de como el todo es mucho más que la suma de las partes</p>
                </div>
                <button onClick={ abrirModalSobreMi }>Sobre Mi</button>
            </div>
            
               <SobreMi modalAbierto={ modalAbiertoSobreMi } cerrarModal={ cerrarModalSobreMi }>
                <h1>
                    Sobre Mi
                </h1>
                <div className='contenidoModal'>
                    <img src={imgsobremi} alt='Foto Sobre mi'></img>
                    <p>
                        Hola, soy un mono de 3 cabezas, vivo en La Isla Del Mono, pero nadie me ve excepto Guybrush
                    </p>
                </div>
               </SobreMi>
        </section>
    )
}