import React, { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const[cantidad, setCantidad] = useState(initial);
    const[itemStock, setItemStock] = useState(stock);
    const[itemAdd, setItemAdd] = useState(onAdd);

    const decremento = (valor) =>{
       if (valor > -1){
        setCantidad(valor)

       }  
    }

    const incremento = (valor) =>{
       if (valor <= itemStock){
        setCantidad(valor);
       }
    }

    const agregarProd = () =>{
        if (cantidad <= itemStock){
            setItemStock (itemStock - cantidad);
            setItemAdd (itemAdd + cantidad);
        }
        
    }
    return(

        <div className="container py-5">
        <div className="row">
            <div className="col-md-3">
                <p>Nombre del producto</p>
            <div className="input-group mb-3">
                <button className="btn btn-outline-secondary" type="button" id="button-addon1" value="-" onClick={() => {decremento(cantidad - 1)}}>-</button>
                <input type="text" className="form-control" value={cantidad}/>
                <button className="btn btn-outline-secondary" type="button" id="button-addon1" value="+" onClick={() => {incremento(cantidad + 1)}}>+</button>
            </div>
            <input type="button" className="btn btn-primary" value="Agregar al carrito" onClick={() => {agregarProd()}}/>
            <p>Productos seleccionados: {itemAdd}</p>
            </div>
        </div>
        
        </div>
    )
}

export default ItemCount;