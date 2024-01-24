/* eslint-disable react/prop-types */
import Item from "../Item/Item"

const ItemList = ({productos}) => {
  return (
    <div>
        {productos.map((prod, index) => <Item key={index} {...prod}/>)}
    </div>
  )
}

export default ItemList