import { BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
// import Home from "./components/Home/Home";
// import Productos from "./components/Productos/Productos";

const AppRouter = () => {
  const { user } = useContext(LoginContext);

  return (
    <BrowserRouter>
      {user.logged ? <PrivateRoutes /> : <PublicRoutes />}
    </BrowserRouter>
  );
};

export default AppRouter;


