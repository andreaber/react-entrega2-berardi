import { useContext, useState } from 'react'
import './LoginScreen.scss'
import { LoginContext } from '../../context/LoginContext'
import { Link } from 'react-router-dom'


const LoginScreen = () => {
  const { login, googleLogin } = useContext(LoginContext)

  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    login(values)
  }

  return (
    <div className="login-container">
      <div className="login">
        <h2>Login</h2>
        <hr />

        <form onSubmit={handleSubmit}>
          <input 
            name='email'
            value={values.email}
            onChange={handleChange}
            type={'email'}
            className='form-control my-2'
            placeholder='Tu email'
          />
          
          <input 
            name='password'
            value={values.password}
            onChange={handleChange}
            type={'password'}
            className='form-control my-2'
            placeholder='Contraseña'
          />

          <button type='submit' className='btn btn-primary'>Ingresar</button>
          <Link to={'/register'}>Registrarme</Link>
        </form>
        <button onClick={googleLogin} className='btn btn-outline-primary'>Ingresar con Google</button>
      </div>
    </div>
  )
}

export default LoginScreen

