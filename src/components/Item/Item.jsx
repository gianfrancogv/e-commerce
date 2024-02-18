/* eslint-disable react/prop-types */
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, titulo, artista, precio, img}) => {
  return (
    <div className="card-producto">
        <img src={img} alt={titulo} />
        <div className='info'>
          <p className='titulo'>{titulo}</p>
          <p className='artista'>({artista})</p>
          <p className='precio'>${precio}</p>
          <Link to={`/item/${id}`}>Ver Detalles</Link>
        </div>
    </div>
  )
}

export default Item