import "./Navbar.scss";
import logo from "../../assets/imgs/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

export const Navbar = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} className="header__logo" alt="logo" />

        <nav className="navbar">
          <Link to="/" className="navbar__link">
            Home
          </Link>
          <Link to="/nosotros" className="navbar__link">
            Nosotros
          </Link>

          <NavDropdown
            title="Productos"
            className="navbar__link"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="/productos/accessories">
              Accesorios
            </NavDropdown.Item>
            <NavDropdown.Item href="/productos/loungewear">
              LoungeWear
            </NavDropdown.Item>
            <NavDropdown.Item href="/productos/jackets">
              Jackets
            </NavDropdown.Item>
            <NavDropdown.Item href="/productos/shirts&dresses">
              Camisas & Vestidos
            </NavDropdown.Item>
            <NavDropdown.Item href="/productos/jeans">Jeans</NavDropdown.Item>
          </NavDropdown>

          <Link to="/contacto" className="navbar__link">
            Contacto
          </Link>
        </nav>
        <CartWidget />
      </div>
    </header>
  );
};
