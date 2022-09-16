import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import catalogo from '../json/catalogo';
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = ()  => {
    
   const [item, setItem] = useState ({});

    const {id} = useParams()

    useEffect(() => {

        const promesa = (id) => 

          new Promise ((resolve) =>{
            setTimeout(()=> {
                resolve (catalogo.find( prod => prod.id === id));
        }, 3000);
            } );
            
            promesa(id)
            .then ((response) => {
                setItem(response)
            })
            .catch ((error) => {
                console.log (error);
            } ) 
   },); 
   


    return(
    <div>
            <ItemDetail item = {item}/>
            </div>
        
    );

    };

export default ItemDetailContainer;