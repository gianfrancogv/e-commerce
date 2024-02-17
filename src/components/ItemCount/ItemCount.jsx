/* eslint-disable react/prop-types */
import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({inicial, stock, funcionAgregar}) => {

    const [contador, setContador] = useState(1);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <div className="contador">
                <button onClick={decrementar}> - </button>
                <div className="count">{contador}</div>
                <button onClick={incrementar}> + </button>
            </div>
            <button onClick={() => {funcionAgregar(contador)}} className="boton-agregar">Agregar al carrito</button>
        </>
    )
}

export default ItemCount