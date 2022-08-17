import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
/* import {getPhardcore, getPhardcoreByCat} from '../../../products' */
import ItemList from './ItemList';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

export default function ItemListContainer() {

  const[productos, setProductos] = useState([]);
  const{idCategory} = useParams();
  
  useEffect(() =>{
    const db = getFirestore();
    let myCollection;

    if(idCategory == undefined){
    myCollection = collection (db, "products");
  }else {
    myCollection = query(
      collection(db, "products"),
      where("idCategory", "==" , idCategory)
      );
  }

  getDocs(myCollection).then((data)=>{
    const auxProducts = data.docs.map(product=> ({
      id: product.id,
      ...product.data() }));
    
      setProductos(auxProducts);
    });

}, [idCategory]);

  return (<ItemList productos={productos}/> )

}

/* 
*******************Cuandoestabaharcodeado****************************
export default function ItemListContainer() {
    const[productos, setProductos] = useState([]);
    const {idCaT} = useParams();
    
    console.log(idCaT)
    
    useEffect(() =>{
      setTimeout(()=>{   },2000);

  if(!idCaT) {
    getPhardcore().then(respuesta=>{
      setProductos(respuesta)
      console.log(productos)
  
    })
  }else{
    getPhardcoreByCat(idCaT).then(respuesta=>{
      setProductos(respuesta)
      console.log(productos)
  
    })
  }
    },[idCaT]); 

  return (<ItemList productos={productos}/> )
}

*/