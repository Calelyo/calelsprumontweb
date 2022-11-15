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
            <div className='conocimientos-header'>
                <h1 className='conociminetos-titulo'>Conocimientos</h1>
                <p className='conociminetos-texto'>
                ¿Cuándo puede alguien decir que domina una tecnología? 
                No lo sé con exactitud, sin embargo, estas son algunas con las que he trabajado y estudiado, 
                y puedo decir con certeza que las sé utilizar en el desarrollo de un proyecto.
                </p>
            </div>

            <div className='conocimientos-iconos'>
                <div className='cont-iconos react'>
                    <img src={ imgreact2 } className='icono' alt='icono react'></img>
                </div>
                <div className='cont-iconos javascript'>
                     <img src={ imgjavascript } className='icono' alt='icono javascript'></img>
                </div>
                <div className='cont-iconos nodejs'>
                    <img src={ imgnodejs } className='icono' alt='icono nodejs'></img>
                </div>
                <div className='cont-iconos java'>
                    <img src={ imgjava } className='icono' alt='icono java'></img>
                </div>
                <div className='cont-iconos git'>
                    <img src={ imggit } className='icono' alt='icono git'></img>
                </div>
                <div className='cont-iconos bootstrap'>
                    <img src={ imgbootstrap } className='icono' alt='icono bootstrap'></img>
                </div>
                <div className='cont-iconos sqlite'>
                    <img src={ imgsqlite } className='icono' alt='icono sqlite'></img>
                </div>
                <div className='cont-iconos tableau'>
                    <img src={ imgtableau } className='icono' alt='icono tableau'></img>
                </div>
                <div className='cont-iconos aftereffects'>
                    <img src={ imgaftereffects } className='icono' alt='icono aftereffects'></img>
                </div>
                <div className='cont-iconos illustrator'>
                    <img src={ imgillustrator } className='icono' alt='icono illustrator'></img>
                </div>
                <div className='cont-iconos premierepro'>
                    <img src={ imgpremierepro } className='icono' alt='icono premierepro'></img>
                </div>
                <div className='cont-iconos photoshop'>
                    <img src={ imgphotoshop } className='icono' alt='icono photoshop'></img>
                </div>
            </div>
        </section>
    )
}