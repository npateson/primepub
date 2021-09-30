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

        const newArr = [...cartArray]
        setCartArray(newArr);
    };

    const handleDecrement = () => {
       if (count > 1) setCount(prev=>prev-1);
       
        // setCartArray(prev => prev);
        setCartArray(prev => [...prev]);
    }

    const handleChange = (e) => {
        const newCount = e.target.value;
        setCount(newCount);
        setCartArray(prev => [...prev]);
        
    }
    

    

    
    return ( 
        <CartItemsWrapper>
        <p>{product.name}</p> <span><i>FCFA</i>{product.price}</span> <i>x</i><input type="number" min="1" max="9" value={count} onChange={handleChange}></input> <strong>{product.price*count}<b>Frs</b></strong>
    <button onClick={handleDecrement}>-</button><button onClick={handleIncrement}>+</button><button onClick={()=>handleDelete(product, index)} id="deleteBtn">X</button>
        </CartItemsWrapper>
     );


}
 
export default CartItem;