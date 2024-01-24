/* eslint-disable react/prop-types */
const Item = ({id, nombre, precio, img}) => {
  return (
    <div>
        <img src={img} alt={nombre} />
        <h3>Nombre: {nombre}</h3>
        <p>ID: {id}</p>
        <p>Precio: {precio}</p>
        <button>Ver Detalles</button>
    </div>
  )
}

export default Item