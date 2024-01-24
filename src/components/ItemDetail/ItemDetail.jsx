/* eslint-disable react/prop-types */
import './ItemDetail.css'

const ItemDetail = ({id, nombre, artista, precio, img}) => {

  return (
    <div className="contenedor-item">

      <div className="imagen">
        <img src={img} alt={nombre} />
      </div>
      <div className="info">
        <h1>Album: {nombre}</h1>
        <h2>Artista: {artista}</h2>
        <h3>Precio: ${precio}</h3>
        <p className="producto-id">ID Producto: #{id}</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore libero esse, ad hic ratione, omnis aut aliquam possimus voluptatibus neque voluptas corrupti temporibus sunt earum! Voluptatibus quisquam inventore impedit nemo!</p>
      </div>
    </div>
  )
}

export default ItemDetail