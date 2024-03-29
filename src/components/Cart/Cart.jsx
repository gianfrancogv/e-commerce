import { useContext } from "react"
import { Link } from "react-router-dom"
import { CarritoContext } from "../../context/CarritoContext"

import "./Cart.css"

import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext)
    
    if (cantidadTotal === 0) {
        return (
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to="/">Ver Productos</Link>
            </>
        )
    }

    return (
        <div className="carrito">
            {
                carrito.map((prod, index) => <CartItem key={index} {...prod} />)
            }
            <div>
                <h3>Total: ${total}</h3>
                <button onClick={() => {vaciarCarrito()}}>Vaciar Carrito</button>
                <Link to={"/checkout"}>Finalizar Compra</Link>
            </div>
        </div>
    )
}

export default Cart