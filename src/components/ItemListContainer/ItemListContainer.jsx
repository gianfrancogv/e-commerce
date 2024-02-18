/* eslint-disable react/prop-types */

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'

import { db } from '../../services/config'
import { collection, getDocs, where, query } from 'firebase/firestore'

import './ItemListContainer.css'

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  const {idCategoria} = useParams();

  useEffect( () => {
    const misProductos = idCategoria ? query(collection(db, "inventario"), where("idCat", "==", idCategoria)) : collection(db, "inventario")   
    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map((doc) => {
          const data = doc.data();
          return {id: doc.id, ...data};
        })
        setProductos(nuevosProductos)
      })
      .catch(error => console.log(error))
  }, [idCategoria]) 

  return (
    <div className='main-container'>
      <h2>Mis Productos</h2>
      <ItemList productos={productos} />
    </div>

  )

}

export default ItemListContainer