import "./Navbar.scss";
import logo from "../../assets/imgs/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
// import { NavDropdown } from "react-bootstrap";
import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";

export const Navbar = () => {
  const { user, logout } = useContext(LoginContext);

  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} className="header__logo" alt="logo" />

        <nav className="navbar">
          <Link to="/" className="navbar__link">Home</Link>
          <Link to="/nosotros" className="navbar__link">Nosotros </Link>
          
          {/* <NavDropdown
            title="Productos"
            className="navbar__link"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item
              href="/productos/accessories"
              className="navbar__link--dropdown"
            >
              Accesorios
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/productos/loungewear"
              className="navbar__link--dropdown"
            >
              LoungeWear
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/productos/jackets"
              className="navbar__link--dropdown"
            >
              Jackets
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/productos/shirts&dresses"
              className="navbar__link--dropdown"
            >
              Camisas & Vestidos
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/productos/jeans"
              className="navbar__link--dropdown"
            >
              Jeans
            </NavDropdown.Item>
          </NavDropdown> */}

          <Link to="/productos/accessories" className="navbar__link">Accesorios</Link>
          <Link to="/productos/jeans" className="navbar__link">Jeans</Link>
          <Link to="/productos/jackets" className="navbar__link">Jackets</Link>
          <Link to="/productos/loungewear" className="navbar__link">Loungewear</Link>
          <Link to="/productos/shirts&dresses" className="navbar__link">Shirts & Dresses</Link>
          <Link to="/contacto" className="navbar__link">Contacto</Link>
        </nav>

        <CartWidget />
      </div>

      <div className="user">
        <h6>Bienvenido: {user.email}</h6>
        <button className="btn btn-danger mb-2" onClick={logout}>
          Logout
        </button>
      </div>
    </header>
  );
};
