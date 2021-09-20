import React, {useState} from 'react';
import {SideBarContainer, Icon, CloseIcon, SideBarMenu, SideBarLink, SideBtnWrap, SideBarRoute} from './SideBarElements'
import CartItem from '../CartItem'
import Total from '../Total'

const SideBar = ({isOpen, toggle, cartArray, setCartArray}) => {
   
    let [totalArray, setTotalArray] = useState([]);
   
   
    return ( 
        <SideBarContainer isOpen={isOpen}>
            <Icon>
                <CloseIcon onClick={toggle}/>
            </Icon>
            <SideBarMenu>
               {cartArray.map((product, index) => {
                       return <CartItem key={index} index={index} product={product} cartArray={cartArray} setCartArray={setCartArray} totalArray={totalArray} setTotalArray={setTotalArray}/>
               })}
                
               
                <SideBarLink to="/">Snacks</SideBarLink>
            </SideBarMenu>
            
            <SideBtnWrap>
            <Total totalArray={totalArray}/>
                <SideBarRoute to="/">Order Now</SideBarRoute>
            </SideBtnWrap>
        </SideBarContainer>
     );
}
 
export default SideBar;