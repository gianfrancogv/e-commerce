import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className="cart-container">
        <img src="src/assets/images/shopping-cart-outline.svg" alt="Cart" />
        <div className="badge">2</div>
    </div>
  )
}

export default CartWidget