import { useState, useEffect } from 'react'
import { getUnProducto } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)

    const {idItem} = useParams()

    useEffect( () => {
      getUnProducto(idItem)
        .then(res => setProducto(res))
    }, [idItem])

    return (
        <div className="item-detail-container">
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer