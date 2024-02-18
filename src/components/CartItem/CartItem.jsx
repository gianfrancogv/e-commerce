/* eslint-disable react/prop-types */
const CartItem = ({item, cantidad}) => {
  return (
    <div>
        <h3>{item.titulo}</h3>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: {item.precio}</p>
    </div>
  )
}

export default CartItem