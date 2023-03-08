import React from 'react';

//style
import style from "./AddToCart.module.css"

//redux
import { useSelector, useDispatch } from 'react-redux';

// helper functions
import {isInCart , quntitiyCounter} from '../helper/functions';

const AddToCart = ({productData}) => {
    const {id}=productData;

    //redux
    const cartState=useSelector(state => state.cartState);
    const dispatch=useDispatch();

    //get quntitiy of product
    let quntitiy= 1;
    if(quntitiyCounter(cartState ,id)){
        quntitiy=quntitiyCounter(cartState ,id);
    }


    return (
        <>
            {
                !isInCart(cartState ,id) ?
                    <div 
                        className={style.addToCart} 
                        onClick={()=> dispatch({type:"AddToCart" ,paylod:{...productData}})}>
                            <h4>Add To Cart</h4></div> :

                    <div className={style.counterContainer}>
                        {
                            quntitiyCounter(cartState ,id) ===1 ?
                                <i className="fa-solid fa-trash"
                                    onClick={()=> dispatch({type:"removeItem",paylod:{...productData}})}></i>:
                                <i className='fa-solid fa-angle-down'
                                    onClick={()=> dispatch({type:"OddOne",paylod:{...productData}})}></i>
                        }
                        <span>{quntitiyCounter(cartState ,id)}</span>
                        <i className="fa-solid fa-angle-up" 
                            onClick={()=> dispatch({type:"AddOne",paylod:{...productData}})}></i>
                    </div>
                }
        </>
    );
};

export default AddToCart;