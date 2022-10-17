import './App.css';
import icoHamburguesa from './img/ico/hamburguesa.png'
import Presentacion from './componentes/Presentacion';
import Conocimientos from './componentes/Conocimientos';
import Proyectos from './componentes/Proyectos';
import Contacto from './componentes/Contacto';

function hamburguesa(){
  let clase = document.getElementById('hamb');
  // let body = document.getElementById('app');
  if(clase.className === 'App-header'){
    clase.className += " responsive"
  } else {
    clase.className = 'App-header'
  }
}

// function scroll(){
//   console.log('Scroll Y: ' + window.scrollY);
//   let presentacion = document.getElementById('presentacion');
//   let conocimientos = document.getElementById('conocimientos');
//   let proyectos = document.getElementById('proyectos');
//   let contacto = document.getElementById('contacto');

//   if(window.scrollY !== 0 && presentacion.className !== 'presentacionNav activo'){
//     presentacion.className += ' activo'
//   } else {
//     presentacion.className = 'presentacionNav'
//   }
  
//   // window.screenY !== 0 ? presentacion.className += ' activo' : presentacion.className = 'presentacionNav';
//   // conocimientos.className === 'NOconocimientos' ? conocimientos.className += ' activo' : conocimientos.className = 'conocimientos';
//   // proyectos.className === 'NOproyectos' ? proyectos.className += ' activo' : proyectos.className = 'proyectos';
//   // contacto.className === 'NOcontacto' ? contacto.className += ' activo' : contacto.className = 'contacto';
  
// }

function App() {
  return (
    <div className="App" id='app'>
      <header className="App-header" id='hamb'>
        <h1 className='minombre'>Calel Sprumont</h1>
        <img src={icoHamburguesa} alt='Hamburguesa' className='hamburguesa' onClick={ () => hamburguesa() }></img>
        <nav>
          <ul>
            <li><a href='/'>R</a></li>
            <li><a href='#Contacto' id='contacto'>Contacto</a></li>
            <li><a href='#Proyectos' id='proyectos'>Proyectos</a></li>
            <li><a href='#Conocimientos' id='conocimientos'>Conocimientos</a></li>
            <li><a href='#Presentacion' id='presentacion' className='presentacionNav'>Presentacion</a></li>
          </ul> 
        </nav>
      </header>
        <div className='presentacion-index'>
          <Presentacion />
        </div>
        <div className='conocimientos-index'>
          <Conocimientos />
        </div>
        <div className='proyectos-index'>
          <Proyectos />
        </div>
        <div className='contacto-index'>
          <Contacto />
        </div>
    </div>
  );
}

export default App;
