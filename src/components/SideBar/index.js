import React, {useState} from 'react';
import {SideBarContainer, Icon, CloseIcon, SideBarMenu, SideBarLink, SideBtnWrap, SideBarRoute, ClearCartBtn} from './SideBarElements'
import CartItem from '../CartItem'
import Total from '../Total'

const SideBar = ({isOpen, setIsOpen, toggle, isSubmit, setIsSubmit, cartArray, setCartArray}) => {
    const [totalArray, setTotalArray] = useState([]);
   
    const handleOrder = () => {
        cartArray.length === 0 ? alert("Your Cart Is Empty, Please Add Items Before Placing An Order") :
        setIsSubmit(true)
    }
   
   
    const ClearCart = (c) => {
       setCartArray([]);
       c.map(product => product.isClicked = false);
   }
   
    return ( 
        <SideBarContainer isOpen={isOpen}>
            <Icon>
                <CloseIcon onClick={toggle}/>
            </Icon>
            <SideBarMenu>
            {cartArray.length === 0 ? 
            <h2>Cart is Empty</h2> : 
              cartArray.map((product, index) => {          
                return < CartItem key={index} index={index} product={product} cartArray={cartArray} setCartArray={setCartArray} totalArray={totalArray} setTotalArray={setTotalArray}/>
               })}
                
               
                {/* <SideBarLink to="/">Snacks</SideBarLink> */}
            </SideBarMenu>
            
            <SideBtnWrap>
            <Total cartArray={cartArray} totalArray={totalArray} setTotalArray={setTotalArray}/>
                <SideBarRoute onClick={handleOrder}>Order Now</SideBarRoute>
                <ClearCartBtn onClick={() => ClearCart(cartArray)}>Clear Cart</ClearCartBtn>
            </SideBtnWrap>
        </SideBarContainer>
     );
}

export default SideBar;