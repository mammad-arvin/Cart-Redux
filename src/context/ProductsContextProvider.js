import React, {useState , useEffect, createContext} from 'react';

// get api function
import GetFromApi from '../service/GetFromApi';

//context
export const ProductContext=createContext();


const ProductsContextProvider = ({children}) => {

    const [datas ,setDatas]=useState({
    
        APIs:[]
    });

    useEffect(()=>{
        const get= async ()=>{

            setDatas({
                APIs:await GetFromApi()
            })
        }
        get();
    },[])

    return (
       <ProductContext.Provider value={datas} >
            {children}
       </ProductContext.Provider>
    );
};

export default ProductsContextProvider;