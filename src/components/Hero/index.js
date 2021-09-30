import React, {useState} from 'react';
import NavBar from '../NavBar';
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from './HeroElements';
import SideBar from '../SideBar';
import Contact from '../Contact';
const Hero = ({cartArray, setCartArray}) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
  };

    return ( 
        <HeroContainer >
           <NavBar toggle={toggle} cartArray={cartArray}/>
           <SideBar isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle} cartArray={cartArray} setCartArray={setCartArray}/>
           <HeroContent >
               <HeroItems>
                   <HeroH1>Prime Pub Restaurant</HeroH1>
                   <HeroP>More than just flavors, it's Home</HeroP>
                   <HeroBtn  onClick={() => setIsOpen(true)}>Place Order</HeroBtn>
                   <Contact />
                   
               </HeroItems>
           </HeroContent>
        </HeroContainer>
     );
}
 
export default Hero;