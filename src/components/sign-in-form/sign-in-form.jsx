import { useState } from "react";

import FormInput from "../form-input/form-input";
import Button from "../button/button";

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
    } catch (err) {
      console.log('inicio de sesión de usuario fallido', err);
      // switch (err.code) {
      //   case "auth/wrong-password":
      //     alert("Contraseña incorrecta para el correo electrónico");
      //     break;
      //   case "auth/user-not-found":
      //     alert("Ningún usuario asociado con este correo electrónico");
      //     break;
      //   default:
      //     console.log(err);
      // }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>¿Ya tiene una cuenta?</h2>
      <span>Inicie sesión con su correo electrónico y su contraseña</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Contraseña"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Iniciar sesión</Button>
          <Button
            type="button"
            buttonType='google'
            onClick={signInWithGoogle}
          >
            Iniciar sesión con Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
