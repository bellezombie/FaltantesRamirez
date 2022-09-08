import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
/* import {getPhardcore, getPhardcoreByCat} from '../../../products' */
import ItemList from './ItemList';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import Loading from '../Loader/Loading';

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const { idCategory } = useParams();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const db = getFirestore();
    let myCollection;

    if (idCategory == undefined) {
      myCollection = collection(db, 'products');
      
    } else {
      myCollection = query(collection(db, 'products'), where('idCategory', '==', idCategory));
      setLoading(false);
    }

    getDocs(myCollection).then((data) => {
      const auxProducts = data.docs.map((product) => ({
        id: product.id,
        ...product.data(),
      }));
      setProductos(auxProducts);
    });
  }, [idCategory]);

  return <>{loading ? <Loading /> : <ItemList productos={productos} />}</>;
}
