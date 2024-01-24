/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { getProductos, getProductosPorCategoria } from '../../asyncmock'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'

import './ItemListContainer.css'

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  const {idCategoria} = useParams();

  useEffect(() => {
    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

    funcionProductos(idCategoria)
      .then(res => setProductos(res))
      .catch(error => console.log(error))

  }, [idCategoria])

  useEffect( () => {
    getProductos()
      .then(respuesta => setProductos(respuesta))
  }, [])

  return (
    <div>
      <h2>Mis Productos</h2>
      <ItemList productos={productos} />
    </div>

  )

}

export default ItemListContainer