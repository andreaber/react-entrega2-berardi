import { Navbar } from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Nosotros from "../components/Nosotros/Nosotros";
import Contacto from "../components/Contacto/Contacto";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { Routes, Route, Navigate } from "react-router-dom";
import Cart from "../components/Cart/Cart";

const PrivateRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/productos/:categoryId" element={<ItemListContainer />} />
        <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>

      <Footer />
    </>
  );
};

export default PrivateRoutes;
