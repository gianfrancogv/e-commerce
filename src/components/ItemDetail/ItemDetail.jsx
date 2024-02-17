/* eslint-disable react/prop-types */
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';

import ItemCount from '../itemCount/itemCount';

import './ItemDetail.css'

const ItemDetail = ({id, nombre, artista, precio, img, stock}) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const {agregarAlCarrito} = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = {id, nombre, precio};
    agregarAlCarrito(item, cantidad);
  }

  return (
    <div className="contenedor-item">

      <div className='imagen-contador'>
        <div className="imagen">
          <img src={img} alt={nombre} />
        </div>
        {
          agregarCantidad > 0 ? (<Link to="/cart">Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
        }
      </div>
      <div className="info">
        <h1>Album: {nombre}</h1>
        <h2>Artista: {artista}</h2>
        <h3>Precio: ${precio}</h3>
        <p>Stock: {stock}</p>
        <p className="producto-id">ID Producto: #{id}</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore libero esse, ad hic ratione, omnis aut aliquam possimus voluptatibus neque voluptas corrupti temporibus sunt earum! Voluptatibus quisquam inventore impedit nemo!</p>
      </div>
    </div>
  )
}

export default ItemDetail