import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemList from './ItemList';
import './ItemListContainer.css';


const ItemListContainer = () => {
    
   
const [items, setItems] = useState([]);
useEffect(() => {

    const catalogo =     [
        {"id": 1, "nombre": "todoDia", "precio": 2200, "tipo":"Frambuesa y pimienta rosa",  "imagen":"https://staticar.natura.com/cdn/ff/eFksrPOPIWKjB2L2Py7D2sI2gj913v0Eacpwl-senAA/1659738667/public/products/76383_1_15.jpg"},
        {"id": 2, "nombre": "tododia", "precio": 2200,"tipo":"Cereza y Avellana", "imagen":"https://staticar.natura.com/cdn/ff/AUWHzmSTUQW-do89bESCfvvp9xxc7W2xqBEUpH_8nnA/1661798648/public/products/95841_1_8.jpg"},
        {"id": 3, "nombre": "Aquas", "precio": 2000,"tipo":"Campo de violetas",  "imagen": "https://staticar.natura.com/cdn/ff/rvDdm5zNfeA3cNZNvOX197RR-u9czWLLy1oajYi-EJk/1657812068/public/products/15435_1_18.jpg"},
        {"id": 4, "nombre": "Ekos", "precio": 3500,"tipo":"Flor Do Luar", "imagen": "https://staticar.natura.com/cdn/ff/dRutd-XZr0di5fBENApLPhrITvh_z1TNkW3n5ygv3Fw/1662151818/public/products/78863_1_15.jpg"},
        {"id": 5, "nombre": "Humor", "precio": 3600,"tipo":"Da Minha Vida", "imagen": "https://cosmeticoslucia.ar/wp-content/uploads/2021/01/Humor-da-minha-vida.jpg"},
        {"id": 6, "nombre": "Humor", "precio": 3600,"tipo":"Propio", "imagen": "https://staticar.natura.com/cdn/ff/CBqTbe8vhShl31qnyDxWkQIuwgcxPikReJQHeKsbswc/1659582745/public/products/8688_1_6.jpg"},
        {"id": 7, "nombre": "Kaiak", "precio": 3500,"tipo":"Aero", "imagen": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/014/432/products/6255da1f-0c39-402f-80b5-126bbd5b6a5a1-78af6510df135ef31315648772364532-1024-1024.jpg"},
        {"id": 8, "nombre": "Kaiak", "precio": 3500,"tipo":"Aventura", "imagen": "https://staticar.natura.com/cdn/ff/2undcseor_ibkE5JCAmiceNeoUSY54wNj0K5NtDpjao/1654615244/public/products/67884_2_3.jpg"},
        {"id": 9, "nombre": "Kriska", "precio": 2700,"tipo":"Drama", "imagen": "https://staticar.natura.com/cdn/ff/XumBsuwtmYjjGziGkezm5FOuhjL4RHNUMSGZllAUcP4/1656117027/public/products/75882_1_2.jpg"},
        {"id": 10, "nombre": "Kriska", "precio": 3500,"tipo":"Shock", "imagen": "https://staticar.natura.com/cdn/ff/Y8nqO-1cpkyYy_Q1MbwlG-iVmr5sdiKBjQojvD_GcDE/1662152082/public/products/83323_1_10.jpg"},
        {"id": 11, "nombre": "Luna", "precio": 2000,"tipo":"Rose", "imagen": "https://d2j6dbq0eux0bg.cloudfront.net/images/44951638/1929305246.jpg"},
        {"id": 12, "nombre": "Luna", "precio": 2500,"tipo":"Floral", "imagen": "https://staticar.natura.com/cdn/ff/xQS4e7UH9F3iqx4ftB3ECL8yRXvCHqc-CTYWXxfaJBo/1661787655/public/products/50238_1_18.jpg"},
        {"id": 13, "nombre": "Biografia", "precio": 2700,"tipo":"Desperte","imagen": "https://fraguru.com/mdimg/perfume/375x500.31812.jpg"},
        {"id": 14, "nombre": "Biografia", "precio": 2200,"tipo":"Inspire","imagen": "https://fraguru.com/mdimg/perfume/375x500.47151.jpg"}
    
    ];

    const promesa = new Promise ((resolve,reyect) => {
        setTimeout(() => {
            resolve(catalogo);
        }, 2000);
    });

    promesa.then((respuesta) => {
        setItems(respuesta);
        console.log(respuesta);
    }); 
 }, []);

    return(
        <div className='container'>
            <ItemList items={items}/>
        </div>
    )

    }

export default ItemListContainer;