import React, {useState} from 'react';

import style from './Product.module.css'
import styled from 'styled-components';


const DivContainer=styled.div`
    width: 225px;
    height: 370px;
    overflow: hidden;
    border-radius: 20px;
    border: 2.5px solid #FA7F0C;
    background: #fefae0;
    transition: transform .3s;

    &:hover{
        transform: scale(.97); 
    }
    img{
        position: relative;
        left: 15px;
        top: 5px;
        width: 195px;
        height: 200px;
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
        line-height: 15px;
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



const Product= ({image,title,category,price})=> {

    const [counter , setCounter]=useState(0);

    const counterUP=() => {
        setCounter(counter => counter + 1)
    }
    const counterDown=() => {
        if(counter >= 1){
            setCounter(counter => counter -1)
        }
    }
     
        return (
            <DivContainer counter={counter}>
                <img src={image} alt="product image" />
                <h1>{title}</h1>
                <p><span>category : </span> {category}</p>
                <p className='price'> <span>${counter <=1 ? price : eval(price * counter).toFixed(2) }</span></p>
                {
                    counter <1 ?
                    
                    <div className={style.addToCart} onClick={counterUP}><h3>Add to cart</h3></div> :

                    <div className={style.counterContainer}>
                        <i className={counter==1 ? `fa-solid fa-circle-minus ` : `fa-solid fa-angle-down`} onClick={counterDown}></i>
                        <span>{counter}</span>
                        <i className="fa-solid fa-angle-up" onClick={counterUP}></i>
                    </div>
                }
            </DivContainer>
        );
}

export default Product;