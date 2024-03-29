import React from 'react';
import {Nav, NavLink, NavIcon, Bars} from './NavBarElements'

const NavBar = (props) => {
    const toggle = props.toggle;
    const cartNum = props.cartArray;
    return ( 
        <>
            <Nav>
                <NavLink to='/'>Prime Pub</NavLink>
                
                <NavIcon onClick={toggle}>
                 
                   <Bars /> 
                   <span>CART</span> <strong>{cartNum.length}</strong>
                </NavIcon>
            </Nav>
        </>
     );
}
 
export default NavBar;