const ItemCount = ({ stock, cantidad, setCantidad, agregar }) => {
  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < stock && setCantidad(cantidad + 1);
  };

  return (
    <div className="itemcount">
      <button
        onClick={handleRestar}
        className={`btn my-3 
        ${cantidad === 1 ? "minimo" : ""} 
        ${
          cantidad === 1 ? "btn btn-outline-danger" : "btn btn-outline-primary"
        }`}
        disabled={cantidad === 1 || stock === 0}
      >
        -
      </button>

      <span className="mx-3">{cantidad}</span>

      <button
        onClick={handleSumar}
        className={
          cantidad === stock ? "btn btn-danger my-3" : "btn btn-primary my-3"
        }
        disabled={cantidad === stock || stock === 0}
      >
        +
      </button>

      <br />

      <button
        disabled={stock === 0}
        onClick={agregar}
        className="btn btn-success"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
