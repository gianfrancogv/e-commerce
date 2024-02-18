import { useState, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc, updateDoc, getDoc, doc } from "firebase/firestore"

const Checkout = () => {

    const {carrito, vaciarCarrito, total} = useContext(CarritoContext);

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const [error, setError] = useState("");

    const manejadorSubmit = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor completar todos los campos");
            return
        } 

        if (email !== emailConfirmacion) {
            setError("Los emails no coinciden");
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                titulo: producto.item.titulo,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        Promise.all(
            orden.items.map( async (productoOrden) => {
                const productoRef = doc(db, "items", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock

                await updateDoc(productoRef, {stock: stockActual - productoOrden.cantidad})
            })
        )
        .then(() => {
            addDoc(collection(db, "ordenes"), orden)
                .then(docRef => {
                    setOrdenId(docRef.id);
                    vaciarCarrito();
                    //SA para mostrar order ID
                })
                .catch(error => console.log(error))
        })
        .catch(error => {
            console.log("No pudimos actualizar el stock", error)
            setError("Error al actualizar el stock")
        })
    }

    return (
        <div>
            <h2>Checkout = Finalizamos la compra</h2>

            <form onSubmit={manejadorSubmit}>
                {
                    carrito.map(producto => (
                        <div key={producto.item.id}>
                            <p>{producto.item.titulo} x {producto.cantidad}</p>
                            <p>${producto.item.precio}</p>
                            <hr />
                        </div>
                    ))
                }

                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" onChange={(e) => {setNombre(e.target.value)}} />
                </div>

                <div>
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" id="apellido" onChange={(e) => {setApellido(e.target.value)}} />
                </div>

                <div>
                    <label htmlFor="telefono">Telefono</label>
                    <input type="text" id="telefono" onChange={(e) => {setTelefono(e.target.value)}} />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={(e) => {setEmail(e.target.value)}} />
                </div>

                <div>
                    <label htmlFor="emailcon">Confirmar Email</label>
                    <input type="email" id="emailcon" onChange={(e) => {setEmailConfirmacion(e.target.value)}} />
                </div>

                {
                    error && <p style={{color: "red"}}> {error} </p>
                }

                <button>Finalizar Orden</button>

                {
                    ordenId && <strong>Gracias por su compra! Tu numero de orden es el siguiente: #{ordenId}</strong>
                }

            </form>
        </div>
    )
}

export default Checkout