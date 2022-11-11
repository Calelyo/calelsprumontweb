import '../estilosComoponentes/proyectos.css'

export default function Proyectos(){

    return(
        <section className='proyectos' id='Proyectos'>
            <div className='proyectosHeader'>
                <h1>Proyectos</h1>
            </div>

            <div className='proyectosBody'>
                <p className='en-desarrollo'>Sección en desarrollo. Disculpe las molestias.</p>
                <div className='contenedorCarga'>
                    <div className='carga'></div>
                    <div className='carga2'></div>
                </div>
            </div>
        </section>
    )
}