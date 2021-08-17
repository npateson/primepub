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
                   <HeroH1>Outstanding Restaurant</HeroH1>
                   <HeroP>Ready to serve you</HeroP>
                   <HeroBtn>Place Order</HeroBtn>
               </HeroItems>
           </HeroContent>
        </HeroContainer>
     );
}
 
export default Hero;