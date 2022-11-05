import '../estilosComoponentes/conocimientos.css'
import imgbootstrap from '../img/ico/bootstrap.png'
import imgjava from '../img/ico/java.png'
import imgjavascript from '../img/ico/javascript.png'
import imgnodejs from '../img/ico/nodejs.png'
import imggit from '../img/ico/git.png'
import imgreact2 from '../img/ico/react2.png'
import imgsqlite from '../img/ico/sqlite.png'
import imgtableau from '../img/ico/tableau.png'
import imgaftereffects from '../img/ico/aftereffects.png'
import imgillustrator from '../img/ico/illustrator.png'
import imgpremierepro from '../img/ico/premierepro.png'
import imgphotoshop from '../img/ico/photoshop.png'

export default function Conocimientos(){
    return(
        <section className="conocimientos" id='Conocimientos'>
            <div className='conocimientosHeader'>
                <h1>Conocimientos</h1>
                <p>
                ¿Cuándo puede alguien decir que domina una tecnología? 
                No lo se con exactitud, sin embargo, estas son algunas con las que he trabajado y estudiado, 
                y puedo decir con certeza que puedo utilizar en el desarrollo de un proyecto.
                </p>
            </div>
            <div className='conocimientosIconos'>
                <div className='cont-inconos react'>
                    <img src={ imgreact2 } className='icono' alt='react'></img>
                </div>
                <div className='cont-inconos javascript'>
                     <img src={ imgjavascript } className='icono' alt='javascript'></img>
                </div>
                <div className='cont-inconos nodejs'>
                    <img src={ imgnodejs } className='icono' alt='nodejs'></img>
                </div>
                <div className='cont-inconos java'>
                    <img src={ imgjava } className='icono' alt='java'></img>
                </div>
                <div className='cont-inconos git'>
                    <img src={ imggit } className='icono' alt='git'></img>
                </div>
                <div className='cont-inconos bootstrap'>
                    <img src={ imgbootstrap } className='icono' alt='bootstrap'></img>
                </div>
                <div className='cont-inconos sqlite'>
                    <img src={ imgsqlite } className='icono' alt='sqlite'></img>
                </div>
                <div className='cont-inconos tableau'>
                    <img src={ imgtableau } className='icono' alt='tableau'></img>
                </div>
                <div className='cont-inconos aftereffects'>
                    <img src={ imgaftereffects } className='icono' alt='aftereffects'></img>
                </div>
                <div className='cont-inconos illustrator'>
                    <img src={ imgillustrator } className='icono' alt='illustrator'></img>
                </div>
                <div className='cont-inconos premierepro'>
                    <img src={ imgpremierepro } className='icono' alt='premierepro'></img>
                </div>
                <div className='cont-inconos photoshop'>
                    <img src={ imgphotoshop } className='icono' alt='photoshop'></img>
                </div>
            </div>
        </section>
    )
}