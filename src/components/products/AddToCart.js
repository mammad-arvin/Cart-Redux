import React,{useContext} from 'react';


//style
import style from "./AddToCart.module.css"

// context
import { Cart_CategoryfilterContext } from '../../context/Cart_CategoryfilterContextProvider';

// helper functions
import {isInCart , quntitiyCounter} from '../helper/functions';

const AddToCart = ({productData}) => {
    const {id}=productData;

    //context
    const cartContext=useContext(Cart_CategoryfilterContext);

    //get quntitiy of product
    let quntitiy= 1;
    if(quntitiyCounter(cartContext.cart_catfilter ,id)){
        quntitiy=quntitiyCounter(cartContext.cart_catfilter ,id);
    }


    return (
        <>
            {
                !isInCart(cartContext.cart_catfilter ,id) ?
                    <div 
                        className={style.addToCart} 
                        onClick={()=> cartContext.cart_catfilterDispach({type:"AddToCart" ,paylod:{...productData}})}>
                            <h4>Add To Cart</h4></div> :

                    <div className={style.counterContainer}>
                        {
                            quntitiyCounter(cartContext.cart_catfilter ,id) ===1 ?
                                <i className="fa-solid fa-trash"
                                    onClick={()=> cartContext.cart_catfilterDispach({type:"removeItem",paylod:{...productData}})}></i>:
                                <i className='fa-solid fa-angle-down'
                                    onClick={()=> cartContext.cart_catfilterDispach({type:"OddOne",paylod:{...productData}})}></i>
                        }
                        <span>{quntitiyCounter(cartContext.cart_catfilter ,id)}</span>
                        <i className="fa-solid fa-angle-up" 
                            onClick={()=> cartContext.cart_catfilterDispach({type:"AddOne",paylod:{...productData}})}></i>
                    </div>
                }
        </>
    );
};

export default AddToCart;