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

function App() {
  return (
    <div className="App" id='app'>
      <header className="App-header" id='hamb'>
        <h1 className='minombre'>Calel Sprumont</h1>
        <img src={icoHamburguesa} alt='Hamburguesa' className='hamburguesa' onClick={ () => hamburguesa() }></img>
        <nav>
          <ul>
            <li><a href='/'>R</a></li>
            <li><a href='#Contacto'>Contacto</a></li>
            <li><a href='#Proyectos'>Proyectos</a></li>
            <li><a href='#Conocimientos'>Conocimientos</a></li>
            <li><a href='#Presentacion'>Presentacion</a></li>
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
