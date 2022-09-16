import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import './ItemListContainer.css';
import catalogo from '../json/catalogo';

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
    
    const promesa = new Promise ((resolve,reyect) => {
        setTimeout(() => {
            if (true) {
                resolve(catalogo);
            } else {
                reyect ("Error en la carga de datos");
            }
        },2000);
            
    }).catch (error => {
        console.log("Error: " + error);
    });


    promesa.then((respuesta) => {
        
        if (categoria ==="all"){
            setItems(respuesta);
            console.log(respuesta);                    
        } else {
            const arrayProd = catalogo.filter(catalogo => catalogo.tipoProd === categoria);
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