import SignUpForm from "../../components/sign-up-form/sign-up-form"
import SignInForm from "../../components/sign-in-form/sign-in-form"

import './authentication.scss'

const Authentication = () => {
  return (
    <div className="authentication-container">
      {/*<h1>Página de Inicio de Sesión</h1>*/}
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication