import '../estilosComoponentes/sobremi.css'
import React from "react";

export default function SobreMi( { children, modalAbierto, cerrarModal } ){
    const sinCierreEnDiv = (e) => e.stopPropagation();
    return(
        <section className={`sobremi ${modalAbierto && 'modalabierto'}`} onClick={ cerrarModal }>
            {/*
            <div className='modal'>
                <button className='cerrarmodal'>X</button>
                <h1>
                    Sobre Mi
                </h1>
                <div className='contenido'>
                    <img src={sobremi}></img>
                    <p>
                        Hola, soy un mono de 3 cabezas, vivo en La Isla Del Mono, pero nadie me ve excepto Guybrush
                    </p>
                </div>
                {children}
            </div>
            */}
            <div className='modalsobremi' onClick={sinCierreEnDiv}>
                <button className='cerrarmodal' onClick={ cerrarModal }>X</button>
                {children}
            </div>
        </section>
    )
}