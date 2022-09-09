import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemCount from './componentes/ItemCount';
import Header from './componentes/Header';


//Componentes. ItemCount pasa por props los valores de stock, initial y onAdd al componente itemCount
function App() {
 
  return ( 
    <div className="App">
          <Header/>
          <NavBar/>
          <ItemListContainer/>
          <ItemCount stock={5} initial ={1} onAdd={0} />
    </div>
  );
}

export default App;

