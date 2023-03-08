import React from 'react';

//styel
import style from "./CartProduct.module.css"

// component
import AddToCart from "./AddToCart"

//redux
import { useDispatch } from 'react-redux';


//helper function
import { cartProductDescripCuter ,cartProductTitleCuter } from '../helper/functions';


const CartProduct = ({data}) => {

    const {image ,title ,description ,price , quntity}=data;


    //redux
    const dispatch=useDispatch();

    //context
    // const context=useContext(Cart_CategoryfilterContext);
    // const dispactch=context.cart_catfilterDispach;

    return (
        <div className={style.CartProductContainer}>
            <div className={style.itemContent}>
                <img src={image} alt="product image" />
                <div className={style.itemDescrip}>
                    <h3>{cartProductTitleCuter(title)}</h3>
                    <p className={style.desctip}>{cartProductDescripCuter(description)} </p>
                </div>
            </div>
            <div className={style.price}>
                <p>${price}</p>
            </div>
            <div className={style.quantity}>
                <AddToCart productData={data}/>
            </div>
            <div className={style.total}>
                <p>${eval( price * quntity)}</p>
                <i 
                    className={`fa-solid fa-xmark ${style.delete}`} 
                    title='delete product'
                    onClick={()=> dispatch({type:"removeItemFromCart" , paylod:data})}
                    ></i>
            </div>

        </div>
    );
};


export default CartProduct;