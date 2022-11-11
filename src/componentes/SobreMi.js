import '../estilosComoponentes/sobremi.css'
import icoCerrarHamburguesa from '../img/ico/cerrarhamburguesa.png'
import React from "react";

export default function SobreMi( { children, modalAbierto, cerrarModal } ){
    const sinCierreEnDiv = (e) => e.stopPropagation();
    return(
        <section className={`sobremi ${modalAbierto && 'modalabierto'}`} onClick={ cerrarModal }>
            <div className='modalsobremi' onClick={sinCierreEnDiv}>
                <picture>
                    <img src={icoCerrarHamburguesa} alt='Cerrar modal' loading='lazy' className='cerrarmodal' onClick={ cerrarModal }></img>
                </picture>
                {children}
            </div>
        </section>
    )
}