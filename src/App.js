// import ClassComponent from './Components/ClassComponent';
// import FunctionComponent from './Components/FunctionComponent';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import './App.css'

function App() {

  // const nombreComponenteDeClase = 'Clase'; 
  //const nombreComponenteDeFuncion = 'Funcion';

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer greeting={'Productos'}/>
      </header>
      <main>
        
      </main>
      <footer>
        
      </footer>
         {/* Componenetes de Ejemplo
        <ClassComponent nombre='Clase'/> 
        <FunctionComponent nombre={nombreComponenteDeFuncion}/>  */}
    </div>
  );
}

export default App;
