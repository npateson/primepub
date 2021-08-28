import { CartItemsWrapper } from "./CartItemElements";
import {useState} from 'react'

const CartItem = ({product, index, cartArray, setCartArray, totalArray}) => {
    const [count, setCount] = useState(1);
      totalArray.push(product.price*count);
      console.log(`totalArray1 is ${totalArray}`)
    const handleDelete = (i) => {
        // console.log(cartArray)
        let newArr = [...cartArray];
        newArr.splice(i, 1);
        console.log(newArr)
        setCartArray(newArr);
    };
    const handleIncrement = () => {
        setCount(prev=>prev+1);
        // totalArray.push(price);
        // console.log(`totalArray2 is ${totalArray}`)
    };

    return ( 
        <CartItemsWrapper>
        <p>{product.name}</p> <span>FCFA{product.price}</span> <i>x</i><input type="text" value={count} onChange={(e)=>setCount(e.target.value)}></input> <strong>{product.price*count}<b>Frs</b></strong>
        <button onClick={() => setCount(prev=>prev-1)}>-</button><button onClick={()=>handleIncrement(product.price)}>+</button><button onClick={()=>handleDelete(index)} id="deleteBtn">X</button>
        </CartItemsWrapper>
     );
}
 
export default CartItem;