import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemCount from './componentes/ItemCount';
import Header from './componentes/Header';

function App() {
  return ( 
    <div className="App">
          <Header/>
          <NavBar/>
          <ItemListContainer/>
          <ItemListContainer greeting="Hola mundo"/>
          <ItemCount stock={5} initial ={1} onAdd={0} />
    </div>
  );
}

export default App;
