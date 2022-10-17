import '../estilosComoponentes/conocimientos.css'
import imggithub from '../img/ico/github.png'
import imgjava from '../img/ico/java.png'
import imgjavascript from '../img/ico/javascript.png'
import imgnodejs from '../img/ico/nodejs.png'
import imgreact2 from '../img/ico/react2.png'
import imgsqlite from '../img/ico/sqlite.png'
import imgtableau from '../img/ico/tableau.png'
import imgaftereffects from '../img/ico/aftereffects.png'
import imgillustrator from '../img/ico/illustrator.png'
import imgpremierepro from '../img/ico/premierepro.png'

export default function Conocimientos(){
    return(
        <section className="conocimientos" id='Conocimientos'>
            <div className='conocimientosHeader'>
                <h1>Conocimientos</h1>
                <p>
                    En el desarrollo de software las tecnologías van evolucionando constantemente,
                    por lo que es dificil decir que uno tiene dominio sobre tal lenguaje o framework.
                    Sin embargo, acá dejo algunas de las tecnologías con las que he tenido experiencias y que se que puedo
                    desenvolverme en ellas para dar vida a proyectos.
                </p>
            </div>
            <div className='conocimientosIconos'>
                <div className='github'>
                    <img src={ imggithub } className='icono' alt=''></img>
                </div>
                <div className='java'>
                    <img src={ imgjava } className='icono' alt=''></img>
                </div>
                <div className='javascript'>
                     <img src={ imgjavascript } className='icono' alt=''></img>
                </div>
                <div className='nodejs'>
                    <img src={ imgnodejs } className='icono' alt=''></img>
                </div>
                <div className='react'>
                    <img src={ imgreact2 } className='icono' alt=''></img>
                </div>
                <div className='sqlite'>
                    <img src={ imgsqlite } className='icono' alt=''></img>
                </div>
                <div className='tableau'>
                    <img src={ imgtableau } className='icono' alt=''></img>
                </div>
                <div className='aftereffects'>
                    <img src={ imgaftereffects } className='icono' alt=''></img>
                </div>
                <div className='illustrator'>
                    <img src={ imgillustrator } className='icono' alt=''></img>
                </div>
                <div className='premierepro'>
                    <img src={ imgpremierepro } className='icono' alt=''></img>
                </div>
            </div>
        </section>
    )
}