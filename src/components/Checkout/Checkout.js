import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
// import { writeBatch, collection, addDoc, updateDoc, doc, getDocs, query, where, documentId } from "firebase/firestore"
import { writeBatch, collection, addDoc, getDocs, query, where, documentId } from "firebase/firestore"
import { db } from "../../firebase/config"


const Checkout = () => {
  const {cart, totalCarrito, vaciarCarrito} = useContext(CartContext)

  const [orderId, setOrderId] = useState(null)
  const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: '',
  })

  const handleInputChange = (e) => {
        setValues({
                ...values,
                [e.target.name]: e.target.value
        })
  }

  const handleSubmit = async (e) => {
        e.preventDefault()

        // validaciones
        if (values.nombre.length < 3) {
                alert("El nombre es muy corto")
                return
        }
        if (values.direccion.length < 6) {
                alert("La dirección es muy corta")
                return
        }
        if (values.email.length < 6) {
                alert("El email es incorrecto")
                return
        }

        const orden = {
                cliente: values,
                items: cart,
                total: totalCarrito(),
                fyh: new Date()
        }

        const batch = writeBatch(db)

        const ordersRef = collection(db, "orders")
        const productosRef = collection(db, "productos")
        const q = query(productosRef, where(documentId(), "in", cart.map(item => item.id)))

        const outOfStock = []

        const productos = await getDocs(q)

        productos.docs.forEach((doc) => {
                const item = cart.find((prod) => prod.id === doc.id)

                if (doc.data().stock >= item.cantidad) {
                        batch.update(doc.ref, {
                                stock: doc.data().stock - item.cantidad
                        })
                } else {
                        outOfStock.push(item)
                }
        })

        if (outOfStock.length === 0) {
                await batch.commit()
                const {id} =await addDoc(ordersRef, orden)
                setOrderId(id)
                vaciarCarrito()

                // batch.commit()
                // .then(() => {
                //         addDoc(ordersRef, orden)
                //                 .then((doc) => {
                //                         setOrderId(doc.id)
                //                         vaciarCarrito()
                //                 })
                // })
        } else {
                alert("hay items sin stock " + outOfStock.map(i => i.name).join(', '))
        }
  }

  if (orderId) {
        return (
                <div className="container my-5">
                        <h2>Tu compra se registró exitosamente!</h2>
                        <hr />
                        <p>Guarda tu número de orden: <strong>{orderId}</strong></p>
                </div>
        )
  }

  if (cart.length === 0) {
        return <Navigate to="/" />
  }

  return (
    <div className="container my-5">
        <h2>Ingresa tus datos</h2>
        <hr />

        <form onSubmit={handleSubmit}>
                <input 
                        name="nombre"
                        onChange={handleInputChange}
                        value={values.nombre}
                        type="text" 
                        className="form-control my-2" 
                        placeholder="Tu nombre"
                />
                <input 
                        name="direccion"
                        onChange={handleInputChange}
                        value={values.direccion}
                        type="text" 
                        className="form-control my-2" 
                        placeholder="Tu dirección" 
                />
                <input 
                        name="email"
                        onChange={handleInputChange}
                        value={values.email}
                        type="email" 
                        className="form-control my-2" 
                        placeholder="Tu email" 
                />

                <button className="btn btn-primary" type="submit">Enviar</button>
        </form>
    </div>
  )
}

export default Checkout


// cart.forEach((item) => {
//         console.log(item)
//         const docRef = doc(db, "productos", item.id)

//         getDoc(docRef)
//                 .then((doc) => {
//                         let stock = doc.data().stock
//                         if (stock - item.cantidad >= 0) {
//                                 updateDoc(docRef, {
//                                         stock: stock - item.cantidad
//                                 })
//                         } else {
//                                 alert("No hay stock de " + doc.data().name)
//                         }
//                 })
// })