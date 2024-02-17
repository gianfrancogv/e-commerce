import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import './CartWidget.css'

const CartWidget = () => {

  const {cantidadTotal} = useContext(CarritoContext);
  
  return (
    <div className="cart-container">
      <Link to="/cart">
        <img src="/img/shopping-cart-outline.svg" alt="Cart" />
        {
          cantidadTotal > 0 && <div className='badge'>{cantidadTotal}</div>
        }
      </Link>
    </div>
  )
}

export default CartWidget