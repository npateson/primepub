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


const Products = ({heading, data}) => {
    return ( 
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
                {data.map((product, index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDescription>{product.desc}</ProductDescription>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductBtn>{product.button}</ProductBtn>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}
            </ProductWrapper>
        </ProductsContainer>

     );
}
 
export default Products;