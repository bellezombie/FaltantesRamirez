import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
// import {getPhardcoreById} from '../../../products.jsx';
import ItemDetail from './ItemDetail';
import {doc, getDoc, getFirestore} from 'firebase/firestore';

export default function ItemDetailContainer() {

  const[product, setProduct] = useState({});
  const{idItem} = useParams(); 
  
  useEffect(() =>{
    const db = getFirestore();
    const refDoc = doc(db, 'products', idItem)
    
  getDoc(refDoc).then((item) => {
    const auxItem = {
      id: item.id,
      ...item.data(), 
    }
      setProduct(auxItem);
  });
  
}, [idItem]);
    
    return ( <ItemDetail  product={product}/>   );
  }


  /*
  *************************codigohardcore******************************
    const [detail,setDetail] =useState([])
   const {idDetail}=useParams()
   
      useEffect(()=>{      
        dataP()
      },[idDetail])
  
    const dataP=()=>{
      getPhardcoreById(idDetail).then(respuesta=>{
      setDetail(respuesta) 
      }
      )} 
  
  */