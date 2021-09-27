import { CartItemsWrapper } from "./CartItemElements";
import {useState, useEffect} from 'react'

const CartItem = ({product, index, cartArray, setCartArray, totalArray, setTotalArray}) => {

    const [count, setCount] = useState(1)
    
     // Adding a count property to product which will be used to calculate the total cost in Total.js
    product.pcount={count};
    // totalArray.push()
  
    const handleDelete = (p, i) => {
        let newArr = [...cartArray];
        newArr.splice(i, 1);
        setCartArray(newArr);
        p.isClicked = false;
      
    };
    const handleIncrement = () => {
        setCount(prev=>prev+1);
    };

    const handleDecrement = () => {
        setCount(prev=>prev-1);
        // setTotalArray(prev => prev)
    }

    const handleChange = (e) => {
        const newCount = e.target.value;
        setCount(newCount);
        
    }
    

    

    
    return ( 
        <CartItemsWrapper>
        <p>{product.name}</p> <span>FCFA{product.price}</span> <i>x</i><input type="text" value={count} onChange={handleChange}></input> <strong>{product.price*count}<b>Frs</b></strong>
    <button onClick={handleDecrement}>-</button><button onClick={handleIncrement}>+</button><button onClick={()=>handleDelete(product, index)} id="deleteBtn">X</button>
        </CartItemsWrapper>
     );


}
 
export default CartItem;