import { Link } from "react-router-dom";
import "./Item.scss";

const Item = ({ item }) => {
  return (
    <div className="item col-3">
      <h2 className="item-name">{item.name}</h2>
      <div className="d-flex justify-content-center align-items-center">
        <img className="item-img" src={item.img} alt="img" />
        {/* <p>{item.description}</p> */}
      </div>
      <p className="item-parag">Precio: $ {item.price}</p>
      <p className="item-parag">
        <small>Categoría: {item.category}</small>
      </p>
      <div className="d-flex justify-content-center align-items-center mb-5">
        <Link to={`/detail/${item.id}`} className="btn btn-primary">
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default Item;
