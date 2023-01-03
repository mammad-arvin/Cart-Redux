import React, {useContext ,useState} from 'react';

//pakage
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

// styles
import style from "./ProductDetails.module.css"

//context
import { ProductContext } from '../../context/ProductsContextProvider';
import { Cart_CategoryfilterContext } from '../../context/Cart_CategoryfilterContextProvider';

//components
import AddToCart from './AddToCart';


// helper function
import { descriptionCuter ,detailTitleCuter ,quntitiyCounter } from '../helper/functions';



const ProductDetails = () => {
    const navigate=useNavigate();

    //states
    const [imageGalery, setImageGalery]=useState(0);
    const nextImage=()=>{
        imageGalery <2 && setImageGalery(imageGalery => (imageGalery +1))
    }
    const prevImage=()=>{
        imageGalery >0 && setImageGalery(imageGalery => (imageGalery -1))
    }
    

    // use params
    const params=useParams();
    const productId=JSON.parse(params.id)

    //context
    const products=useContext(ProductContext);
    const fakestoreapi=products.APIs[0];
    const dummy=products.APIs[1];
    const escuelajs=products.APIs[2];
     

    //get curent url and access to APIName ;)
    const url= ()=>{
        return window.location.href
    }
    const apiOfProduct=url();
    const apiSplited=apiOfProduct.split("/");
    const APIName=apiSplited[3];

    // map on api Based on APIName
    if(APIName==="escuelajs"){
        var product=escuelajs[productId-1];
        var productImage=product.images[`${imageGalery}`];
    }else if(APIName==="fakestoreapi"){
        var product=fakestoreapi[productId-301];
        var productImage=product.image;
    }else if(APIName==="dummy"){
        var product=dummy.products[productId-401];
        var productImage=product.images[`${imageGalery}`];
    }


    //context
    const cartContext=useContext(Cart_CategoryfilterContext);
    //get quntitiy of product
    let quntitiy= 1;
    if(quntitiyCounter(cartContext.cart_catfilter ,productId)){
        quntitiy=quntitiyCounter(cartContext.cart_catfilter ,productId);
    }


    return (
        <div className={style.detailsContainer}>
            <div className={style.leftSide}>
                <i className={!imageGalery ? `fa-solid fa-arrow-left ${style.arrowkey}  ${style.deActive}` : `fa-solid fa-arrow-left ${style.arrowkey}` }
                    onClick={()=> prevImage()}
                        ></i>
                <img src={productImage} alt="image of product" ></img>
                <i className={imageGalery ===2 ? `fa-solid fa-arrow-right ${style.arrowkey} ${style.deActive}` : `fa-solid fa-arrow-right ${style.arrowkey}`}
                    onClick={()=> nextImage()}
                        ></i>
            </div>
            <div className={style.rightSide}>
                <h1>{detailTitleCuter(product.title)}</h1>
                <p className={style.description}>{descriptionCuter(product.description)}</p>
                <p className={style.price}>{quntitiy <=1 ? product.price : eval(product.price * quntitiy).toFixed()}$</p>
                <AddToCart productData={product}/>
                <h5 className={style.backtoshop} onClick={()=> navigate(-1)} > <i className="fa-solid fa-rotate-left"></i> Back To Shopp</h5>
            </div>
        </div>
    );
};

export default ProductDetails;