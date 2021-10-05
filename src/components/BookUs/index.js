import {SideBarContainer, Icon, CloseIcon, SideBarMenu, SideBarLink, SideBtnWrap, SideBarRoute, ClearCartBtn} from './BookUsElements'
import  React, {useState, useRef} from 'react'

const Book = ({ isThank, setIsThank, isBooked, setIsBooked}) => {
    

   const inputRef = useRef();
   const nameRef = useRef();
   const eventRef = useRef();
   const dateRef = useRef();
   const qtyRef = useRef();


   const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNum = inputRef.current.value;
    const name = nameRef.current.value;
   if ( phoneNum.length !== 9 || phoneNum[0] !== "6") {
       alert("Phone Number must begin with 6 and must contain 9 digits")
   } else {
   
    setIsThank(true);
    inputRef.current.value = "";
    nameRef.current.value = "" ;
    dateRef.current.value = "" ;
    eventRef.current.value = "" ;
    qtyRef.current.value = "" ;
   }
      
   
}
    return ( 
        <SideBarContainer isBooked={isBooked}>
            <Icon>
                <CloseIcon onClick={() => setIsBooked(false)}/>
            </Icon>
            <SideBarMenu>
                <form onSubmit={handleSubmit}> 
                    <label for="name" > Name: </label>
           <input ref={nameRef} type='text' id="name" placeholder="Please Enter Your Name" required/> 
<br />
           <label for="phone" > Phone: </label>
           <input ref={inputRef} type="number" id="phone" placeholder="Please Enter Your Phone Number" required/> 

           <label for="event" > What Event Are You Booking Us For ? </label>
           <input ref={eventRef} type="text" id="event" placeholder="Event Name" required/> 

           <label for="date" > Date Of The Event ? </label>
           <input ref={dateRef} type="date" id="date" required/> 

           <label for="qty" > Approximately How Many Participants ? </label>
           <input ref={qtyRef} type="number" id="qty" placeholder="Number of Attendees" required/> 

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

export default Book;