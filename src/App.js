import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { UserContext } from "./contexts/user.context";

import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import Authentication from "./routes/authentication/authentication.jsx";
import Shop from "./routes/shop/shop";


const App = () => {
  const { currentUser } = useContext(UserContext)
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route 
          path="auth" 
          element={
            currentUser ? <Navigate to='/' replace /> : <Authentication />
          } 
        />
      </Route>
    </Routes>
  )
}

export default App;
