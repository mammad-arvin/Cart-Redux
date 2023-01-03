import React, {useContext} from 'react';

//  packages
import styled from 'styled-components';

// components
import Category from './products/Category';
import loader from '../assets/loader.gif';


// contexts
import {ProductContext} from "../context/ProductsContextProvider";
import { Cart_CategoryfilterContext } from '../context/Cart_CategoryfilterContextProvider';


// styled components
const LoaderContainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height:calc(100vh - 103px);
    overflow:hidden;
`;


const Categories=() => {

    // get data from context
    const products=useContext(ProductContext);
    const fakestoreapi=products.APIs[0];
    const dummy=products.APIs[1];
    const escuelajs=products.APIs[2];

    // context
    const Cart_Categoryfilter=useContext(Cart_CategoryfilterContext);
    const categoryFilter=Cart_Categoryfilter.cart_catfilter.categoreFilter;


    if(products.APIs.length){
        if(categoryFilter || categoryFilter==="all"){

        
            return (
                <> 
                        {/* {
                            categoryFilter === "all"  || categoryFilter === "Shoes" ?
                                <Category 
                                    categoryName="shoes" 
                                    categoryId={4} 
                                    api={escuelajs} 
                                    apiName='escuelajs' /> :
                                     null
                        } */}

                        {
                            categoryFilter === "all"  || categoryFilter === "Electronics" ?
                                <Category
                                    categoryName="Smart Phones" 
                                    categoryId="smartphones" 
                                    api={dummy.products} 
                                    apiName='dummy' /> :
                                     null
                        }

                        {
                            categoryFilter === "all"  || categoryFilter === "Electronics" ?
                                <Category 
                                    categoryName="Laptops" 
                                    categoryId="laptops" 
                                    api={dummy.products} 
                                    apiName='dummy' /> :
                                     null
                        }                   

                        {
                            categoryFilter === "all"  || categoryFilter === "Fragrances" ?
                                <Category 
                                    categoryName="Fragrances"
                                    categoryId="fragrances" 
                                    api={dummy.products} 
                                    apiName='dummy' /> :
                                     null
                        }

                        {
                            categoryFilter === "all"  || categoryFilter === "Others" ?
                                <Category 
                                    categoryName="Skincare" 
                                    categoryId="skincare" 
                                    api={dummy.products} 
                                    apiName='dummy' /> :
                                     null
                        }
       
                        {
                            categoryFilter === "all"  || categoryFilter === "Others" ?
                                <Category 
                                    categoryName="Groceries" 
                                    categoryId="groceries"
                                     api={dummy.products} 
                                     apiName='dummy' /> :
                                      null
                        }
    
                        {
                            categoryFilter === "all"  || categoryFilter === "Others" ?
                                <Category 
                                    categoryName="Home Decoration" 
                                    categoryId="home-decoration" 
                                    api={dummy.products} 
                                    apiName='dummy' /> :
                                     null
                        }
                    
                        {
                            categoryFilter === "all"  || categoryFilter === "Clothes" ?
                                <Category 
                                    categoryName="Clothes" 
                                    categoryId="clothing" 
                                    api={fakestoreapi} 
                                    apiName='fakestoreapi' /> :
                                     null
                        }
                </>
            )
        }
        else{

        }
    }else{
        return (
            <LoaderContainer>
                <img src={loader} alt='loader' />
            </LoaderContainer>
        )
        
    }
}


export default Categories;