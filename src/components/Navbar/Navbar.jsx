import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <header>
        <div className="logo-container">
            <img src="src/assets/images/logo.png" alt="Recordland Logo" />
        </div>

        <nav>
            <ul>
                <li>Vinilos</li>
                <li>CDs</li>
                <li>Libros</li>
            </ul>
        </nav>
        
        <CartWidget></CartWidget>
    </header>
  )
}

export default Navbar