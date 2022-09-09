import React from 'react';

//Recibe por props el nombre, precio e imagen de cada producto (desde itemList) y construye una card para mostrar los productos en pantalla
const Item = ({id, nombre, imagen, precio}) =>{
    return(
        <div>
            <div className="card">
                <img src={imagen} className="card-img-top" alt={nombre}/>
                    <div className="card-body">
                        <h5 className="card-title">{nombre}</h5>
                        <p className="card-text">${precio}</p>
                        <button className='btn btn-primary'>Comprar</button>
                    </div>
                </div>
            </div>
    )

}
export default Item;