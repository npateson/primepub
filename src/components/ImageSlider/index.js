import {sliderData} from './SliderData'
import './slider.css'
import React, {useState} from 'react'
import {SliderWrapper, SlideImg, RightArrow, LeftArrow} from './ImageSliderElements'


const ImageSlider = () => {

    const [current, setCurrent] = useState(0);
    const length = sliderData.length; 

    const nextSlide = () => {
        setCurrent(current === length-1? 0 : current + 1)
    }

    const previousSlide = () => {
        setCurrent(current === 0? length - 1 : current - 1);
    }
    
    if (!Array.isArray(sliderData) || length <= 0) {
        return null
    }

    return ( 
        <SliderWrapper>
            <h2>A Cozy and Outstanding Environment for all your Events</h2>
             <LeftArrow onClick={previousSlide}/>
             <RightArrow onClick={nextSlide}/>
              
           {
              
               sliderData.map((slide, index)=> {
                   slide.id={index}
                   slide.key={index}
                
                   return  (
                    <div key={index} className={index === current? 'slide active' : 'slide'}>
                        {index === current && (<SlideImg src={slide.image} alt="Prime Pub Images" key={index}/>)}
                   </div>)
                   
               })
           }
        </SliderWrapper>
     );
}
 
export default ImageSlider;