/* eslint-disable react/prop-types */

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <p>Id: {id}</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore libero esse, ad hic ratione, omnis aut aliquam possimus voluptatibus neque voluptas corrupti temporibus sunt earum! Voluptatibus quisquam inventore impedit nemo!</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail