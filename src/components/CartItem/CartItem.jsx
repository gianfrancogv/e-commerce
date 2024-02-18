/* eslint-disable react/prop-types */
import "./CartItem.css"

const CartItem = ({item, cantidad}) => {
  return (
    <div className="cart-item">
        <div className='imagen-contador'>
            <img src={item.img} alt={item.titulo} />
        </div>
        <div>
          <h3>{item.titulo}</h3>
          <p>Cantidad: {cantidad}</p>
          <p>Precio: ${item.precio}</p>
        </div>
    </div>
  )
}

export default CartItem