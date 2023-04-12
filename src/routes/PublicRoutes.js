import { Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from "../components/LoginScreen/LoginScreen";
import RegisterScreen from "../components/RegisterScreen/RegisterScreen";
// import { Navbar } from "../components/Navbar/Navbar";
// import Nosotros from "../components/Nosotros/Nosotros";
// import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
// import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
// import Contacto from "../components/Contacto/Contacto";
// import Footer from "../components/Footer/Footer";
// import Cart from "../components/Cart/Cart";
// import Checkout from "../components/Checkout/Checkout";

const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={ <LoginScreen /> } />
        <Route path='/register' element={ <RegisterScreen /> } />
        <Route path="*" element={ <Navigate to={"/login"} />} />
      </Routes>
    </>
  );
};

export default PublicRoutes;



        // <Route path="/" element={<ItemListContainer />} />
        // <Route path="/productos/:categoryId" element={<ItemListContainer />} />
        // <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
        // <Route path="/cart" element={<Cart />} />
        // <Route path="/checkout" element={<Checkout />} />
        // <Route path="/nosotros" element={<Nosotros />} />
        // <Route path="/contacto" element={<Contacto />} /> 
