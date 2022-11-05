import './App.css';
import icoHamburguesa from './img/ico/hamburguesa.png'
import icoCerrarHamburguesa from './img/ico/cerrarhamburguesa.png'
import Presentacion from './componentes/Presentacion';
import Conocimientos from './componentes/Conocimientos';
import Proyectos from './componentes/Proyectos';
import Contacto from './componentes/Contacto';
import cv from './pdf/CalelSprumontCurriculumVitae2022.pdf'

// let cerrabierto = icoHamburguesa;

function hamburguesa(){
  let clase = document.getElementById('hamb');
  let cerrarMenu = document.getElementById('cerrarMenu')
  let hamburguesa = document.getElementById('hamburguesa')
  // let body = document.getElementById('app');
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

  if(hamburguesa.className === 'hamburguesa'){
    hamburguesa.className += " girada"
    // cerrabierto = icoHamburguesa
  } else {
    hamburguesa.className = 'hamburguesa'
    // cerrabierto = icoCerrarHamburguesa
  }
  // console.log(cerrabierto)
}

// function abiertoCerrado(){
//   let icoHamb = icoHamburguesa;
//   let icoCerr = icoCerrarHamburguesa;
//   let elemento = document.getElementById('cerrarMenu');
//   if(elemento.className === 'cerrarMenu'){
//     return icoHamb
//   } else {
//     return icoCerr
//   }

// }

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

// let n = document.getElementById('cerrarMenu').className === 'cerrarMenu' ? icoHamburguesa : icoCerrarHamburguesa


// function a(){
//   let i = document.getElementById('hamb');
//   if(i.className === 'App-header responsive'){
//     return(
//       <img src={icoHamburguesa} alt='Hamburguesa' id='hambuerguesa' className='hamburguesa' onClick={ () => hamburguesa() }></img>
//     )
//   } else {
//     return(
//       <img src={icoCerrarHamburguesa} alt='Hamburguesa' id='hambuerguesa2' className='hamburguesa' onClick={ () => hamburguesa() }></img>
//     )
//   }
// }


function App() {
  // const [modalAbiertoHamburguesa, abrirModalHamburguesa, cerrarModalHamburguesa] = useModal(false)
  // let n = document.getElementById('cerrarMenu').className === 'cerrarMenu' ? icoHamburguesa : icoCerrarHamburguesa
  return (
    <div className="App" id='app'>
      <div id='cerrarMenu' className='cerrarMenu' onClick={ () => hamburguesa() }></div>
      <header className="App-header" id='hamb'>
        <h1 className='minombre'>Calel Sprumont</h1>
        <picture>
        <img src={icoHamburguesa} alt='Hamburguesa' id='hamburguesa' className='hamburguesa' onClick={ () => hamburguesa() }></img>
        <img src={icoCerrarHamburguesa} alt='Hamburguesa' id='hamburguesaCierre' className='hamburguesaCierre' onClick={ () => hamburguesa() }></img>
        </picture>
        <nav>
          <ul>
            <li><a href='/' onClick={ () => hamburguesa() }>R</a></li>
            <li><a href={ cv } target='_blank' rel='noopener noreferrer'>CV</a></li>
            <li><a href='#Contacto' id='contacto' onClick={ () => hamburguesa() }>Contacto</a></li>
            <li><a href='#Proyectos' id='proyectos' onClick={ () => hamburguesa() }>Proyectos</a></li>
            <li><a href='#Conocimientos' id='conocimientos' onClick={ () => hamburguesa() }>Conocimientos</a></li>
            <li><a href='#Presentacion' id='presentacion' onClick={ () => hamburguesa() }>Presentacion</a></li>
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
