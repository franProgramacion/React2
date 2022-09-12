import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import Header from './componentes/Header';
import ItemDetailContainer from './componentes/ItemDetailContainer';


//Componentes. ItemCount pasa por props los valores de stock, initial y onAdd al componente itemCount
function App() {
 
  return ( 
    <div className="App">
          <Header/>
          <NavBar/>
          <ItemListContainer/>
          <ItemDetailContainer/>
    </div>
  );
}

export default App;

