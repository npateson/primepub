import styled from 'styled-components';


export const ProductsContainer = styled.div`
// box-sizing: border-box;
width: 100%;
min-height: 100vh;
padding-top: 1rem ;
background: #150f0f;
color: #fff;
`

export const ProductWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 0 auto;
`

export const ProductCard = styled.div`
margin: 0 1.5rem;
line-height: 1.2;
width: 250px;

@media screen and (max-width:680px) {
    width: 350px;
}
`

export const ProductImg = styled.img`
height: 250px;
min-width: 250px;
max-width: 100%;
box-shadow: 8px 8px #fdc500;
`

export const ProductsHeading = styled.div`
font-size: clamp(2rem , 2.5vw, 3rem);
text-align: center;
margin-bottom: 2rem;
`

export const ProductTitle = styled.h2`
font-weight: 400;
font-size: 1.5rem;
`

export const ProductInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0.5rem;
margin-bottom: 1.5rem;
text-align: center;
`

export const ProductDescription = styled.p`
margin-bottom: 0.3rem;
`

export const ProductPrice = styled.p`
margin-bottom: 0.3rem;
font-size: 2rem;
`

export const ProductBtn = styled.button`
font-size: 1rem;
padding: 1rem 4rem;
border: none;
background: #e31837;
color: #fff;
transition: 0.2 ease-out;

&:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
}
`

