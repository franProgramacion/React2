import './App.css';
import {Routes, Route} from 'react-router-dom';
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
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/categoria' element={<ItemListContainer/>} />
            <Route path='/categoria/:tipo' element={<ItemListContainer/>} />
            <Route path='/categoria/:id' element={<ItemListContainer/>} />
            <Route path='/item/:id' element={<ItemDetailContainer />} /> 
          </Routes>
          
    </div>
  );
}

export default App;

