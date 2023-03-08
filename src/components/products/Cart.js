import React from 'react';

// style
import style from "./Cart.module.css"

//component
import CartProduct from './CartProduct';

//redux
import { useDispatch, useSelector } from 'react-redux';


// empty cart image
import EmptyCart from "../../assets/Empty-Cart.svg"
import { Link } from 'react-router-dom';

const Cart = () => {

    //redux
    const cartState=useSelector(state => state.cartState)
    const cart=cartState.addedItems;
    const dispach=useDispatch();

    // map on product for get balance
    const balance=cart.reduce(( balance , item)=>{
         balance +=item.price * item.quntity;
         return balance
    },8.6)



    const TotalItems=`[ ${cartState.itemCounter} Item ]`;

        return (
            <div className={style.cartContainer}>
                <div className={style.leftSile}>
                    {
                        cart.length ?
                            <>
                                <h3 style={{marginBottom:"10px" ,color:"#000"}}>YOUR CART <span>{TotalItems}</span></h3>
                                <div className={style.titles}>
                                    <span style={{display:"inline-block",width:"49%"}}>Item</span> 
                                    <span style={{display:"inline-block",width:"12%"}}>Price</span>
                                    <span style={{display:"inline-block",width:"23%"}}>Quantity</span>
                                    <span style={{display:"inline-block",width:"15%"}}>Total</span>
                                </div>
                                {cart.map(item => <CartProduct key={item.id} data={item} />)}
                            </>:
                            <>
                                <h3 style={{marginBottom:"10px" ,color:"#000"}}>YOUR CART IS EMPTY</h3>
                                <img className={style.EmptyCartImage} src={EmptyCart} alt="emptyCart image" />
                                <Link to='/categories'>go to shopp</Link>
                            </>
                    }
                </div>
                    
                {
                    cartState.itemCounter ?
                    <div className={style.rightSile}>
                        {
                            !cartState.checkout?
                                <>
                                        <div className={style.getAddress}>
                                        <h3>CHECKOUT</h3>
                                        <div className={style.delicConst}><p>Delivery Cost:</p>  <span>$8.6</span></div>
                                        <label htmlFor="Province">Province:</label>
                                        <select name='Province' onChange={(event)=> dispach({type:event.target.value})}>
                                            <option value="Select Province">select Province</option>
                                            <option value="Tehran" >Tehran</option>
                                            <option value="Zagros" >Zagros</option>
                                            <option value="Fars" >Fars</option>
                                        </select>
                                        <label htmlFor="City">City:</label>
                                        <select name='City'>
                                            <option value="Select City">select...</option>
                                            {
                                                cartState.Province ==="Tehran" ?
                                                    <>
                                                        <option value="Tehran">Tehran</option>
                                                        <option value="karaj">karaj</option>
                                                        <option value="shahr ghods">shahr ghods</option>
                                                    </>:
                                                cartState.Province ==="Zagros" ?
                                                    <>
                                                        <option value="Yasuj">Yasuj</option>
                                                        <option value="sisakht">sisakht</option>
                                                        <option value="dehdasht">dehdasht</option>
                                                    </>:
                                                cartState.Province ==="Fars" ?
                                                    <>
                                                        <option value="shiraz">shiraz</option>
                                                        <option value="sadra">sadra</option>
                                                    </>:
                                                null
                    
                                            }
                                        </select>
                                        <label htmlFor="Zip">Zip/Postcode:</label>
                                        <input type="text" name="Zip" placeholder="zip/Postcode" maxLength={10} />
                                        
                                    </div>
                                    <div className={style.checkuot}>
                                        <div className={style.totalItems}>
                                            <h3>Total Items:</h3>
                                            <h3>{TotalItems.split(" ")[1]}</h3>
                                        </div>
                                        <div className={style.balance}>
                                            <h3>Balance<span> (USD)</span>:</h3>
                                            <h3>${balance.toFixed(2)}</h3>
                                        </div>
                                        <button 
                                            onClick={()=> dispach({type:"checkout"})}
                                            className={style.checkuotBtn}>CHECKOUT</button>
                                        <hr />
                                        <button
                                            onClick={()=> dispach({type:"clearCart"})}
                                            className={style.clearCartBtn}>CLEAR CART</button>
                                    </div>
                                </>:
                                        <>
                                            <div className={style.checkSuccess}>
                                                <h3>Check Out Successfully</h3>
                                                <Link to="/"  onClick={()=> dispach({type:"RefalseCheckout"})}>Empty cart & Back to home</Link>
                                            </div>
                                        </>
                                
                        }
                    </div> : null
                } 
            </div>
        );
    
};

export default Cart;