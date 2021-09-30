import React, {useState} from 'react';
import NavBar from '../NavBar';
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from './HeroElements';
import SideBar from '../SideBar';
import Contact from '../Contact';
import Order from '../Order';
import Thanks from '../Thanks';


const Hero = ({cartArray, setCartArray}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isThank, setIsThank] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
  };

    return ( 
        <HeroContainer >
           <NavBar toggle={toggle} cartArray={cartArray}/>
           <Order isSubmit={isSubmit} setIsSubmit={setIsSubmit} isThank={isThank} setIsThank={setIsThank} isOpen={isOpen} setIsOpen={setIsOpen} cartArray={cartArray} setCartArray={setCartArray}/>
           <SideBar isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle} cartArray={cartArray} setCartArray={setCartArray} isSubmit={isSubmit} setIsSubmit={setIsSubmit}/>
           <Thanks isThank={isThank} setIsThank={setIsThank}/>
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