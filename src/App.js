import './App.css';
import icoHamburguesa from './img/ico/hamburguesa.png'
import icoCerrarHamburguesa from './img/ico/cerrarhamburguesa.png'
import Presentacion from './componentes/Presentacion';
import Conocimientos from './componentes/Conocimientos';
import Proyectos from './componentes/Proyectos';
import Contacto from './componentes/Contacto';
import cv from './pdf/CalelSprumontCurriculumVitae2022.pdf'
import csdesarrollador from './img/CalelSprumontDesarrolladorFullStack.png'

function hamburguesa(){
  let clase = document.getElementById('hamb');
  let cerrarMenu = document.getElementById('cerrarMenu')
  if(clase.className === 'App-header'){
    clase.className += " responsive"
  } else {
    clase.className = 'App-header'
  }

  if(cerrarMenu.className === 'cerrarMenu'){
    cerrarMenu.className += " menuAbierto";
  } else {
    cerrarMenu.className = 'cerrarMenu'
  }
}

function App() {
  return (
    <div className="App" id='app'>
      <header className="App-header">
      <div id='cerrarMenu' className='cerrarMenu' onClick={ () => hamburguesa() }></div>
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
