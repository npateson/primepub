import {SideBarContainer, Icon, CloseIcon, SideBarMenu, SideBarLink, SideBtnWrap, SideBarRoute, ClearCartBtn} from './ThanksElements'
import  React, {useState} from 'react'

const Thank = ({ isSubmit, setIsSubmit, isThank, setIsThank }) => {
    return ( 
        <SideBarContainer isThank={isThank}>
            <Icon>
                <CloseIcon onClick={() => setIsThank(false)}/>
            </Icon>
            <SideBarMenu>
             <h1>Thank You !!!</h1>
             <h2>We have received your order and will reach out to you soon</h2>
             <h3> You may call us @ <span>671129112</span></h3>
            </SideBarMenu>
            
            <SideBtnWrap>
               
               Prime Pub Restaurant
            </SideBtnWrap>
        </SideBarContainer>
     );
}

export default Thank;