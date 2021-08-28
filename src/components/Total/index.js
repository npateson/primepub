import { TotalWrapper } from "./TotalElements";

const Total = ({totalArray}) => {
    console.log(totalArray)
    let total = totalArray.reduce((sum, initial) => sum + initial, 0)

    return ( 
        <TotalWrapper>
            <p id = "total">TOTAL : </p>
            <p id = "totalVal"><span>{total}</span> FCFA</p>
        </TotalWrapper>
     );
}
 
export default Total;