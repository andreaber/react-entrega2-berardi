import { 
  signInWhitGooglePopup, 
  createUserDocumentFromAuth, 
} from "../../utils/firebase/firebase.utils"


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
    </div>
  )
}

export default SignIn