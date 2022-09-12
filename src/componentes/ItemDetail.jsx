import React from "react"
import ItemCount from './ItemCount'


const ItemDetail = ({item}) => {
    
   return(
        <div className="container py-5"> 
        <div className='row'>
            <div className="col-md-6 py-5">
                <img src = {item.imagen} className="card-img-top" alt = {item.nombre} />
                <div className ="card-body"> 
                <h3 className="card-title"> {item.nombre} </h3>
                <p className="card-text"> El spray perfumado de Tododia es una invitación a vestirte con un perfume suave. Combina el sedoso aroma a frambuesa y pimienta roja en tu piel, hará que tenga una sensación irresistible, hidratada y refrescante. Siente la ligereza en tu cuerpo al usar el spray perfumado de Tododia al caminar por las calles.</p>
                <h3> ${item.precio}   </h3>
                <div>
                    <ItemCount stock ={10} initial = {1} />
                </div>
                
            </div>
            
            </div>
            
            </div>
           
            </div>
    );

    };

export default ItemDetail;