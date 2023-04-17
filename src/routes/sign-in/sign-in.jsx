import { 
  signInWhitGooglePopup, 
  createUserDocumentFromAuth, 
} from "../../utils/firebase/firebase.utils"
import SignUpForm from "../../components/sign-up-form/sign-up-form"


const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWhitGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <div>
      <h1>Página de Inicio de Sesión</h1>
      <button onClick={logGoogleUser}>
        Iniciar sesión con la ventana emergente de Google
      </button>
      <SignUpForm />
    </div>
  )
}

export default SignIn