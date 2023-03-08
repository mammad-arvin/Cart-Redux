import React from 'react';

//pakages
import { Link } from 'react-router-dom';

//style
import style from './Basket.module.css';

//redux
import { useSelector } from 'react-redux';

const Basket = () => {

  //redux
  const cartState=useSelector(state => state.cartState)
  const itemCounter=cartState.itemCounter;
  
    return (
        <div>
            <Link to='/cart'>
              <i className={`fa-solid fa-basket-shopping ${style.Basket}`} alt="basket">
                  {itemCounter ?  
                      <i className={style.quntitiyOfbasket}>{itemCounter}</i>:
                        null
                  }
              </i>
            </Link>
        </div>
    );
};

export default Basket;