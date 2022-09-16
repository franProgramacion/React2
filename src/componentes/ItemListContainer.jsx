import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import './ItemListContainer.css';



const ItemListContainer = () => {

const [items, setItems] = useState([]);
const {tipo} = useParams();

useEffect(() => {
let categoria = "";
    if (tipo === "perfumeria") {
        categoria = "perfumeria";
     } else if (tipo ==="desodorantes") {
        categoria = "desodorantes";
     } else if (tipo ==="cremas") {
         categoria = "cuidados-diarios"; 
     }
         else if (tipo ==="jabones") {
             categoria = "jabones"; }
         else {
        categoria = "all";
     }

    fetch ("../json/catalogo.json")
    .then(response => response.json())
    .then (json => {
        if (categoria === "all"){
            setItems(json)
        } else {
            console.log(categoria);
            const arrayProd = json.filter(catalogo => catalogo.tipoProd === categoria);
            setItems(arrayProd);
        }
        
        

      
    });
       
}, [tipo]);

   
    
    
    return(
        <div className='container'>
            <ItemList items={items}/>
        </div>
    )

    }

export default ItemListContainer;