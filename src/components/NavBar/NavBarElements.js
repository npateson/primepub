import styled from 'styled-components';
import {NavLink as Link } from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'

export const Nav = styled.nav`
background: transparent;
height: 80px;
display: flex;
justify-content: center;
font-weight: 700 ;
`;

export const NavLink = styled(Link)`
color: #fff;
font-size: 2rem;
display: flex;
align-items: center;
text-decoration: none;
cursor: pointer;

@media screen and (max-width:  400px) {
    position: absolute;
    top: 10px;
    left: 25px;
}
`

export const NavIcon = styled.div`
display: block;
position: absolute;
top: 15px;
right: 0;
cursor: pointer;
position: fixed;


span, strong {
    color: #ffc500;
    font-size: 1.8rem;
    display: inline-block;
    transform: translateY(-15px);
    margin-right: 12px;
    margin-left: 8px;
}
span {
    margin-right: 0px
}

@media screen and (max-width:680px) {
    margin-top: 8px;

    span {
        display: none;
    }
   
}
`

export const Bars = styled(FaShoppingCart)`
font-size: 2rem;
transform: translate(-50%, -15%);
color: #ffc500;
margin-left: 0
display: inline-block;
transform: translateY(-8px);
z-index: 99999;
`