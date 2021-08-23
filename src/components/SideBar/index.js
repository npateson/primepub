import React from 'react';
import {SideBarContainer, Icon, CloseIcon, SideBarMenu, SideBarLink, SideBtnWrap, SideBarRoute} from './SideBarElements'
import CartItem from '../CartItem'
import Total from '../Total'

const SideBar = ({isOpen, toggle}) => {
    return ( 
        <SideBarContainer isOpen={isOpen}>
            <Icon>
                <CloseIcon onClick={toggle}/>
            </Icon>
            <SideBarMenu>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
               
                <SideBarLink to="/">Snacks</SideBarLink>
            </SideBarMenu>
            
            <SideBtnWrap>
            <Total />
                <SideBarRoute to="/">Order Now</SideBarRoute>
            </SideBtnWrap>
        </SideBarContainer>
     );
}
 
export default SideBar;