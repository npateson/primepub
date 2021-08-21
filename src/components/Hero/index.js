import React, {useState} from 'react';
import NavBar from '../NavBar';
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from './HeroElements'
import SideBar from '../SideBar'
const Hero = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
  };
 

    return ( 
        <HeroContainer>
           <NavBar toggle={toggle}/>
           <SideBar isOpen={isOpen} toggle={toggle}/>
           <HeroContent>
               <HeroItems>
                   <HeroH1>Prime Pub Restaurant</HeroH1>
                   <HeroP>More than just flavors, it's Home</HeroP>
                   <HeroBtn>Place Order</HeroBtn>
               </HeroItems>
           </HeroContent>
        </HeroContainer>
     );
}
 
export default Hero;