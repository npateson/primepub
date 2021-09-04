import styled from 'styled-components'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';


export const SliderWrapper = styled.div`
position: relative;
height: 100vh;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
background-color: black;

@media screen and (max-width: 800px) {
    // width: 100vw;
    height: 65vh;
    padding: 10px 0px;
}
@media screen and (max-width: 600px) {
    // width: 100vw;
    height: 48vh;
    padding: 10px;
}

h2 {
    color: #fff;
    font-weight: bold;
    margin: 10px auto;
    font-size: 2.5rem;
    // position: absolute;

@media screen and (max-width: 800px) {
   font-size: 0.9rem;
}
}
`

export const SlideImg = styled.img`
width: 70vw;
height: 85vh;;
border-radius: 10px;
object-fit: cover;
margin: 10px auto 40px;

@media screen and (max-width: 800px) {
    width: 95vw;
    height: 60vh;
    padding: 10px 0px;
    border-radius: 20px;
}
@media screen and (max-width: 600px) {
    // width: 100vw;
    height: 45vh;
    padding: 10px;
}
`
export const RightArrow = styled(FaArrowAltCircleRight)`
position: absolute;
top: 50%;
right: 32px;
font-size: 3rem;
color: #fff;
z-index: 100;
cursor: pointer;
user-select: none;
`

export const LeftArrow = styled(FaArrowAltCircleLeft)`
position: absolute;
top: 50%;
left: 32px;
font-size: 3rem;
color: #fff;
z-index: 100;
cursor: pointer;
user-select: none;
`

