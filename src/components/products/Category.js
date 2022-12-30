import React from 'react';

//pakages
import styled from 'styled-components';

//components
import Product from './Product';
import MiniLoading from '../MiniLoading';

// styled components

const Container=styled.div`
    padding: 15px 5px;
    display: grid;
    grid-template-columns: repeat(auto-fit , minmax( 225px ,227px));
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media (max-width: 771px) {
        grid-auto-flow: column;
        overflow-y: scroll;
        justify-content:flex-start;
        align-items: inherit; 
    }
    
    @media (max-width: 600px) {
        column-gap: 20px;
    }
`;

const categoryNameStyle={
    marginTop:"35px",
    textAlign: "center",
    lineHeight:"12px",
}

const pathStyle={
    margin:"0 auto",
    width:"270px",
    height:"25px",
    backgroundColor:"#12A6E1",
    clipPath: "polygon(0 0%, 50% 100%, 100% 0%)",
}

const Category = ({categoryName, api, categoryId, apiName}) => {

    return (
        
        <>
        
            <h1 style={categoryNameStyle}>{categoryName}</h1>
            <div style={pathStyle}></div> 
            {
                api.length ?
                    <Container>
                        { 
                            apiName==="escuelajs" ?
                                api.map( product =>   
                                    product.category.id ===categoryId && 
                                        <Product 
                                            key={product.id}
                                            id={product.id}
                                            apiName={apiName} 
                                            image={product.images[0]} 
                                            title={product.title} 
                                            category={product.category.name} 
                                            price={product.price} /> ):
                            apiName==="dummy" ?
                                api.map( product =>  
                                    product.category ===categoryId &&
                                        <Product 
                                            key={product.id}  
                                            id={product.id}
                                            apiName={apiName}
                                            image={product.thumbnail} 
                                            title={product.title} 
                                            category={product.category} 
                                            price={product.price} /> ):
                            apiName==="fakestoreapi" ?
                                api.map( product =>
                                    product.category === "men's clothing" ||
                                        product.category === "women's clothing" ? 
                                        <Product 
                                            key={product.id} 
                                            id={product.id}
                                            apiName={apiName}
                                            image={product.image} 
                                            title={product.title} 
                                            category={product.category} 
                                            price={product.price} /> :
                                        null) :
                            null
                        }
                    </Container>     :
                    <MiniLoading />
            }
        </>
    );
};

export default Category;