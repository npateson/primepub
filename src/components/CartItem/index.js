import { CartItemsWrapper } from "./CartItemElements";

const CartItem = () => {
    return ( 
        <CartItemsWrapper>
        <p>Fried-Rice</p> <span>2500Frs</span> <i>x</i><b>2</b> <strong>5000FCFA</strong>
        <button>-</button><button>+</button><button id="deleteBtn">X</button>
        </CartItemsWrapper>
     );
}
 
export default CartItem;