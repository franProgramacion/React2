import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import ItemDetail from "./ItemDetail";


const ItemDetailContainer = ()  => {
    
   const [item, setItem] = useState ({});

    const {id} = useParams()

    useEffect(() => {

        fetch ("../json/catalogo.json").then (response => {
            return response.json();
        }).then(catalogo => {
            const getProduct = () =>
        new Promise((res, rej) => {
            const product = catalogo.find((prod) => prod.id === id);
            setTimeout(() => {
                res(product);
            }, 500);
        });

    getProduct()
        .then((info) => {
            setItem(info);
        })
        .catch((error) => {
            console.log(error);
        });
}, [id]);
        })
        
        


    return(
    <div>
            <ItemDetail item = {item}/>
            </div>
        
    );

    };

export default ItemDetailContainer;