import React,{useContext} from 'react';

//pakages
import { Link } from 'react-router-dom';

//style
import style from './Basket.module.css';

// context
import { Cart_CategoryfilterContext } from '../context/Cart_CategoryfilterContextProvider';

const Basket = () => {

  //context
  const cart=useContext(Cart_CategoryfilterContext);
  const itemCounter=cart.cart_catfilter.itemCounter;
  
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