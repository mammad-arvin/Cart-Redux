import React,{useContext} from 'react';

//styel
import style from "./CartProduct.module.css"

// component
import AddToCart from "./AddToCart"

//context
import { Cart_CategoryfilterContext } from '../../context/Cart_CategoryfilterContextProvider';


//helper function
import { cartProductDescripCuter } from '../helper/functions';


const CartProduct = ({data}) => {

    const {image ,title ,description ,price , quntity}=data;

    //context
    const context=useContext(Cart_CategoryfilterContext);
    const dispactch=context.cart_catfilterDispach;

    return (
        <div className={style.CartProductContainer}>
            <div className={style.itemContent}>
                <img src={image} alt="product image" />
                <div className={style.itemDescrip}>
                    <h3>{title}</h3>
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
                    onClick={()=> dispactch({type:"removeItemFromCart" , paylod:data})}
                    ></i>
            </div>

        </div>
    );
};


export default CartProduct;