import { FaCartPlus } from 'react-icons/fa';
import './CartWidget.scss'


const CartWidget = () => {

    return (  
        <div className='cart-widget'>
            {/* <img src={carrito} alt="cart"/> */}

            <FaCartPlus className='cart-icon'/>
            <span> 0</span>
        </div>
    );
}

export default CartWidget;