import React from 'react';

//pakages
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// helper functions
import {titleCuter, quntitiyCounter} from '../helper/functions'
import AddToCart from './AddToCart';

//redux
import { useSelector } from 'react-redux';


// styled components
const DivContainer=styled.div`
    width: 215px;
    height: 370px;
    overflow: hidden;
    border-radius: 20px;
    border: 2px solid #FA7F0C;
    background: #d2dae2;
    box-shadow: 0px 2px 5px 2px rgba(250, 127, 12, .8);
    transition: transform .3s;
    &:hover{
        transform: scale(.97);
    }
    a{
        color: black;
        text-decoration: none;
    }
    img{
        position: relative;
        left: 10px;
        top: 5px;
        width: 195px;
        height:200px;
        min-height:200px;
        border-radius: 15px;
        background-position: center;
        background-size: cover;
        transition: transform .3s;
    }
    &:hover img{
        transform: scale(1.1);
    }
    h1{
        height: 40px;
        font-size: 16px;
        line-height: 18px;
        margin: 15px 0 0 0;
        overflow: hidden;
    }
    h1,p{
        margin-left: 8px;
    }
    p{
        margin-top: 0;
        font: 13px FiraCodeMedium;
        &:nth-child(1){
            color: red;
            span{
                font-weight: 900;
            }
        }
    }
    .price{
        font-size: 16px;
        text-align: center;
        
        span{
            background: #487eb0;
            border-radius: 5px;
            padding: 2px 5px;
        }
    }
`;



const Product= (props)=> {

    const {image,title,category,price ,id ,apiName}=props;

    //redux
    const cartState=useSelector(state => state.cartState);

    //get quntitiy of product
    let quntitiy= 1;
    if(quntitiyCounter(cartState ,id)){
        quntitiy=quntitiyCounter(cartState ,id);
    }
     
        return (
            <DivContainer>
                <Link to={`/${apiName}/${id}`}>
                <img src={image} alt="image of product" />
                <h1>{titleCuter(title)}</h1>
                </Link>
                <p><span>category: </span> {category}</p>
                <p className='price'> <span>${quntitiy <=1 ? price : eval(price * quntitiy).toFixed() }</span></p>
                <AddToCart productData={props}  />
            </DivContainer>
        );
}

export default Product;