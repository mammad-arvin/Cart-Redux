import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';


import {BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App';



axios.interceptors.response.use( respo =>{
  if(respo.request.responseURL === "https://api.escuelajs.co/api/v1/products"){
    const newRepo=respo.data.map(item => item.category.id === 4 ? item : null).sort().splice(0, 12);
    let i=1;
    for(let item of newRepo){
      item.id= i;
      i++;
    }
    return newRepo;
  }
  if(respo.request.responseURL === "https://fakestoreapi.com/products"){
    respo.data.map(item => item.id= item.id + 300)
  }
  if(respo.request.responseURL === "https://dummyjson.com/products"){
    respo.data.products.map(item => item.id= item.id + 400)
  }
  return respo.data;

})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>  
  <BrowserRouter>
          <App />
  </BrowserRouter>
  </>
  
);