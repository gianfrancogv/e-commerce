import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <div className="logo-container">
            <img src="/img/logo.png" alt="Recordland Logo" />
          </div>
        </Link>

        <nav className='navbar'>
          <ul>
            <li>
              <NavLink to="/categoria/1">Vinilos</NavLink>
            </li>
            <li>
              <NavLink to="/categoria/2">CDs</NavLink>
            </li>
          </ul>
        </nav>

        <CartWidget />
      </div>
    </header>
  )
}

export default Navbar