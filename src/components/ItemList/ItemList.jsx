/* eslint-disable react/prop-types */
import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({productos}) => {
  return (
    <div className="contenedor-productos">
        {productos.map((prod, index) => <Item key={index} {...prod}/>)}
    </div>
  )
}

export default ItemList