import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';

function App() {
  return (
    <div className="App">
          <NavBar/>
          <ItemListContainer saludo="Hola mundo"/>
    </div>
  );
}

export default App;
