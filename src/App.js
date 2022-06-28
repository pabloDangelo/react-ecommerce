import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
function App() {

  let itemsNavBar = ['Inicio', 'Contacto', 'Quienes somos'];
  let itemsListContainer = ['Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item']; // Por el momento vacio


  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div className="App">
      <NavBar items={itemsNavBar}/>
      <ItemListContainer greeting={'Bienvenido'} items={itemsListContainer} />

      <ItemCount stock={0} initial={0}/>
    </div>
    
  );
}

export default App;
