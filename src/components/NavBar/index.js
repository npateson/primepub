import React from 'react';
import {Nav, NavLink, NavIcon, Bars} from './NavBarElements'

const NavBar = (props) => {
    const toggle = props.toggle;
    return ( 
        <>
            <Nav>
                <NavLink to='/'>Prime Pub Resto</NavLink>
                
                <NavIcon onClick={toggle}>
                   <p>Menu</p>
                   <Bars />
                </NavIcon>
            </Nav>
        </>
     );
}
 
export default NavBar;