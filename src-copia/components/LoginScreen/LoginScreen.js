import { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import "./LoginScreen.scss";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  const { login, googleLogin } = useContext(LoginContext);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login(values);
  };

  return (
    <div className="login-container">
      <div className="login">
        <h2>Login</h2>
        <hr />

        <form onSubmit={handleSubmit}>
          <input
            name="email"
            onChange={handleChange}
            value={values.email}
            type={"email"}
            className="form-control my-2"
            placeholder="Email"
          />

          <input
            name="password"
            onChange={handleChange}
            value={values.password}
            type={"text"}
            className="form-control my-2"
            placeholder="Contraseña"
          />

          <button type="submit" className="btn btn-primary">
            Ingresar
          </button>
          <Link to={"/register"}>Registrarme</Link>
        </form>
        <button onClick={googleLogin} className="btn btn-outline-primary">Ingresar con Google</button>
            
          
      </div>
    </div>
  );
};

export default LoginScreen;
