import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { BsTrash3Fill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, vaciarCarrito, removerItem, totalCarrito } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="container my-5">
        <h2>No tienes productos agregados</h2>
        <hr />
        <Link className="btn btn-primary" to="/">
          Volver
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2>Tu compra</h2>
      <hr />

      {cart.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <img src={item.img} alt="" />
          <div>
            <small>
              Cantidad: {item.cantidad} <br /> Precio Unit.: $ {item.price}
            </small>
          </div>
          <p>Precio Total: $ {item.price * item.cantidad}</p>
          <button
            onClick={() => removerItem(item.id)}
            className="btn btn-danger"
          >
            <BsTrash3Fill />
          </button>
          <hr />
        </div>
      ))}

      <h3>TOTAL: $ {totalCarrito()}</h3>
      <button onClick={vaciarCarrito} className="btn btn-danger m-2">
        Vaciar Carrito
      </button>
      <Link to="/checkout" className="btn btn-success m-2">
        Terminar mi compra
      </Link>
    </div>
  );
};

export default Cart;
