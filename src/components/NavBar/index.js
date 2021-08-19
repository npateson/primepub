import React from 'react';
import {Nav, NavLink, NavIcon, Bars} from './NavBarElements'

const NavBar = (props) => {
    const toggle = props.toggle;
    return ( 
        <>
            <Nav>
                <NavLink to='/'>Prime Pub Resto</NavLink>
                
                <NavIcon onClick={toggle}>
                   <p>CART</p>
                   <Bars /> 
                   <span>0</span>
                </NavIcon>
            </Nav>
        </>
     );
}
 
export default NavBar;