import React from 'react';
import {SideBarContainer, Icon, CloseIcon, SideBarMenu, SideBarLink, SideBtnWrap, SideBarRoute} from './SideBarElements'


const SideBar = ({isOpen, toggle}) => {
    return ( 
        <SideBarContainer isOpen={isOpen}>
            <Icon>
                <CloseIcon onClick={toggle}/>
            </Icon>
            <SideBarMenu>
                <SideBarLink to="/">Dishes</SideBarLink>
                <SideBarLink to="/">Drinks</SideBarLink>
                <SideBarLink to="/">Snacks</SideBarLink>
            </SideBarMenu>
            <SideBtnWrap>
                <SideBarRoute to="/">Order Now</SideBarRoute>
            </SideBtnWrap>
        </SideBarContainer>
     );
}
 
export default SideBar;