import {
    ProductsContainer,
    ProductsHeading,
    ProductWrapper,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductTitle,
    ProductDescription,
    ProductPrice,
    ProductBtn
} from './ProductsElements'
import React,{useState} from 'react'


const Products = ({heading, data, cartArray, setCartArray}) => {


    const handleClick = (product) => {
       
        // cartArray.include(product) ? setCartArray(cartArray => [...cartArray]) : setCartArray(cartArray => [...cartArray, product]);
        product.isClicked = true;
        setCartArray(cartArray => [...cartArray, product]);
    }
    return ( 
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
                {data.map((product, index) => {
                    product.id = index;
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDescription>{product.desc}</ProductDescription>
                                <ProductPrice><b>FCFA {product.price}</b></ProductPrice>
                              { product.isClicked || cartArray.includes(product)?  <ProductBtn  onClick={()=> alert("This product is already in your cart")} style={{backgroundColor: '#fdc500'}}>Added to Cart</ProductBtn>:
                              <ProductBtn  onClick={()=> handleClick(product)}>{product.button}</ProductBtn> }
                            </ProductInfo>
                        </ProductCard>
                    )
                })}
            </ProductWrapper>
        </ProductsContainer>

     );
}
 
export default Products;