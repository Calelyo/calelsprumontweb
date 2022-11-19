import './App.css';
import icoHamburguesa from './img/ico/hamburguesa.png'
import icoCerrarHamburguesa from './img/ico/cerrarhamburguesa.png'
import Presentacion from './componentes/Presentacion';
import Conocimientos from './componentes/Conocimientos';
import Proyectos from './componentes/Proyectos';
import Contacto from './componentes/Contacto';
import cv from './pdf/CalelSprumontCurriculumVitae2022.pdf'

function hamburguesa(){
  let clase = document.getElementById('app-header');
  let cerrarMenu = document.getElementById('Cerrar-menu')
  if(clase.className === 'App-header'){
    clase.className += " responsive"
  } else {
    clase.className = 'App-header'
  }

  if(cerrarMenu.className === 'cerrar-menu'){
    cerrarMenu.className += " menu-abierto";
  } else {
    cerrarMenu.className = 'cerrar-menu'
  }
}

function App() {
  return (
    <div className="App" id='app'>
      <header className="App-header" id='app-header'>
      <div id='Cerrar-menu' className='cerrar-menu' onClick={ () => hamburguesa() }></div>
        {
        /* <picture>
          <img src={icoHamburguesa} alt='Hamburguesa' id='hamburguesa' loading='lazy' className='hamburguesa' onClick={ () => hamburguesa() }></img>
          <img src={icoCerrarHamburguesa} alt='Cerrar hamburguesa' id='hamburguesaCierre' loading='lazy' className='hamburguesaCierre' onClick={ () => hamburguesa() }></img>
        </picture> */
        }
        
        <nav className='barra-navegacion'>
          <ul>
            {/* <li><a href='/' onClick={ () => hamburguesa() }>R</a></li> */}
            <li><a href={ cv } title='curriculum vitae' target='_blank' rel='noopener noreferrer'>CV</a></li>
            <li><a href='#Contacto' title='contacto' id='contacto' onClick={ () => hamburguesa() }>Contacto</a></li>
            <li><a href='#Proyectos' title='proyectos' id='proyectos' onClick={ () => hamburguesa() }>Proyectos</a></li>
            <li><a href='#Conocimientos' title='conocimientos' id='conocimientos' onClick={ () => hamburguesa() }>Conocimientos</a></li>
            <li><a href='#Presentacion' title='presentacion' id='presentacion' onClick={ () => hamburguesa() }>Presentación</a></li>
          </ul> 

          <picture className='contenedor-hamburguesa'>
            <img src={icoHamburguesa} alt='Hamburguesa' id='Hamburguesa' loading='lazy' className='hamburguesa' onClick={ () => hamburguesa() }></img>
            <img src={icoCerrarHamburguesa} alt='Cerrar hamburguesa' id='Hamburguesa-cierre' loading='lazy' className='hamburguesa-cierre' onClick={ () => hamburguesa() }></img>
          </picture>
        </nav>
      </header>


      
      <Presentacion />
        
      <Conocimientos />

      <Proyectos />
      
      <Contacto />


    </div>
    
  );
}

export default App;
