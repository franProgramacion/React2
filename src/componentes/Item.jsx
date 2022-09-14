import React from 'react';
import { Link } from 'react-router-dom';

//Recibe por props el nombre, precio e imagen de cada producto (desde itemList) y construye una card para mostrar los productos en pantalla
const Item = (item) =>{
    return(
        <div>
            <div className="card">
                <Link to= {"/producto/" + item.id} ><img src={item.imagen} className="card-img-top" alt={item.nombre}/></Link>
                    <div className="card-body">
                        <h5 className="card-title">{item.nombre}</h5>
                        <p className="card-text">${item.precio}</p>
                        <Link to= {"/producto/id" + item.id} className='btn btn-primary'>Comprar</Link>
                        <Link to= {"/producto/id" + item.id} className='btn btn-secondary'>Info</Link>
                    </div>
                </div>
            </div>
    )

}
export default Item;