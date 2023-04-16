import { useContext } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.scss";

const CartWidget = () => {
  const { totalCantidad, cart } = useContext(CartContext);

  return (
    <Link
      to="/cart"
      className={`cart-widget ${cart.length > 0 ? "cart-widget-active" : ""}`}
    >
      <TiShoppingCart className="cart-icon" />
      <span>{totalCantidad()}</span>
    </Link>
  );
};

export default CartWidget;
