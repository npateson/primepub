import { TotalWrapper } from "./TotalElements";
import {useEffect} from "react";

const Total = ({cartArray, setCartArray}) => {
    //   const sum = totalArray.reduce((s, t) => s + t, 0)
    // let total = totalArray.reduce((sum, initial) => sum + initial, 0)
    
   //Calculating the total cost of selected items in the array

    let sum = 0;
    cartArray.map((p) => {
        sum += p.price*p.pcount.count
})
 

    return ( 
        <TotalWrapper>
            <p id = "total">TOTAL : </p>
            <p id = "totalVal"><span>{sum}</span> FCFA</p>
        </TotalWrapper>
     );
}
 
export default Total;