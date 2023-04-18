import { useState } from "react"

import FormInput from "../form-input/form-input"
import Button from '../button/button'

import { 
  createAuthUserWithEmailAndPassword, 
  createUserDocumentFromAuth, 
} from "../../utils/firebase/firebase.utils"

// import { UserContext } from '../../contexts/user.context'

import './sign-up-form.scss'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email, 
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch(err) {
      if (err.code === 'auth/email-already-in-use') {
        alert('No se puede crear el usuario, el correo electrónico ya está en uso');
      } else {
        console.log('Error en creación de usuario', err);
      }
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormFields({...formFields, [name]: value});
  };

  return (
    <div className='sign-up-container'>
      <h2>¿No tiene una cuenta?</h2>
      <span>Regístrese con su correo electrónico y su contraseña</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Nombre' 
          type="text" 
          required 
          onChange={handleChange} 
          name="displayName" 
          value={displayName} 
        />

        <FormInput
          label='Email' 
          type="email" 
          required 
          onChange={handleChange} 
          name="email" 
          value={email} 
        />
        
        <FormInput
          label='Contraseña' 
          type="password" 
          required 
          onChange={handleChange} 
          name="password" 
          value={password} 
        />
        
        <FormInput
          label='Confirmar Contraseña' 
          type="password" 
          required 
          onChange={handleChange} 
          name="confirmPassword" 
          value={confirmPassword} 
        />

        <Button type="submit">
          Registrarse
        </Button>
        
      </form>
    </div>
  )
}

export default SignUpForm