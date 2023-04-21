import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from '../../components/cart-icon/cart-icon'
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";

import { UserContext } from '../../contexts/user.context'
import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as UrbanLogo } from '../../assets/logo-uk.svg'
import { signOutUser } from '../../utils/firebase/firebase.utils.js'

import './navigation.scss'


const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <UrbanLogo className="logo" />       
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
            SHOP
          </Link>

          <Link className="nav-link" to='/contact'>
            CONTACTO
          </Link>

          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              CERRAR SESIÓN
            </span>
          ) : (
            <Link className="nav-link" to='/auth'>
              INICIAR SESIÓN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation