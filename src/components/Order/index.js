import {SideBarContainer, Icon, CloseIcon, SideBarMenu, SideBarLink, SideBtnWrap, SideBarRoute, ClearCartBtn} from './OrderElements'
import  React, {useState, useRef} from 'react'

const Order = ({ isSubmit, setIsSubmit, isThank, setIsThank, isOpen, setIsOpen, cartArray, setCartArray}) => {
    

    const inputRef = useRef();
    const nameRef = useRef();
   const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNum = inputRef.current.value;
    const name = nameRef.current.value;
   if ( phoneNum.length !== 9 || phoneNum[0] !== "6") {
       alert("Phone Number must begin with 6 and must contain 9 digits")
   } else {
    setIsSubmit(false);
    setIsOpen(false);
    setIsThank(true);
    setCartArray([]);
    cartArray.map((p) => p.isClicked = false);
    inputRef.current.value = "";
    nameRef.current.value = "" ;
   }
      
   
}
    return ( 
        <SideBarContainer isSubmit={isSubmit}>
            <Icon>
                <CloseIcon onClick={() => setIsSubmit(false)}/>
            </Icon>
            <SideBarMenu>
                <form onSubmit={handleSubmit}> 
                    <label for="name" > Name: </label>
           <input ref={nameRef} type='text' id="name" placeholder="Please Enter Your Name" required/> 
<br />
           <label for="phone" > Phone: </label>
           <input ref={inputRef} type="number" id="phone" placeholder="Please Enter Your Phone Number" required/> 
           {/* <br /><br /><br /><br /><br /> */}
            
           <label for="message"> Message: </label>
            <textarea id="message" placeholder="Anything You Want Us To Know? (Optional)"/>

           <ClearCartBtn >Submit </ClearCartBtn>
           </form>
            </SideBarMenu>
            
            <SideBtnWrap>
               
               
            </SideBtnWrap>
        </SideBarContainer>
     );
}

export default Order;