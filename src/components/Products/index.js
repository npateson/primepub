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
import React from 'react'


const Products = ({heading, data, cartArray, setCartArray}) => {
    const handleClick = (product) => {
       
        setCartArray(cartArray => [...cartArray, product]);
        // console.log(`Products cartArray is ${cartArray}`)
        // const newArr = [...cartArray, {product}];
        // cartArray=newArr;
        // setCartArray(newArr)
        // console.log(`Products cartArray is ${cartArray}`)
    //   console.log(cartArray);
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
                                <ProductBtn  onClick={()=> handleClick(product)}>{product.button}</ProductBtn>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}
            </ProductWrapper>
        </ProductsContainer>

     );
}
 
export default Products;