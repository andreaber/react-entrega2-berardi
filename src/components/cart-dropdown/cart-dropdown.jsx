
import Button from '../button/button';
import './cart-dropdown.scss'


const CartDropdown = () => {
  return (  
    <div className='cart-dropdown-container'>
      <div className='cart-items' />
      <Button>IR AL CARRITO</Button>
    </div>
  );
}

export default CartDropdown;