import React from 'react';
import Item from './Item';

//Map: iteracion del arreglo de items. Realiza un recorrido del arreglo de objetos (construido en itemListContainer) buscando el nombre, imagen y precio de cada producto. Guarda esos valores en variables y los pasa por props al componente item
const ItemList = ({items}) =>{

    return(
        <div className='row'>
            {items.map(item => (
                <div key={item.id} className='col-md-3 py-5'>
                <Item nombre={item.nombre} imagen={item.imagen} precio={item.precio}/>
                </div>) 
            )} 
        </div>
    )

}
export default ItemList;