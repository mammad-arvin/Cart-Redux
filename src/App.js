import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";


// components
import Humber from "./components/Humber";
import Home from "./components/Home";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Categories from "./components/Categories";
import Basket from "./components/Basket";
import ProductDetails from "./components/products/ProductDetails";
import Cart from "./components/products/Cart";
import AboutUs from "./components/AboutUs";

// redux
import { Provider } from "react-redux";
import store from "./Redux/store";



const App = () => {
    const [open, setOpen] = useState(true);
    const hamburgarCliclHandler = () => {
        setOpen(!open);
    };
    const closeNav = () => {
        open === false && setOpen(!open);
    };

    const myStyle = { minHeight: "calc(100vh - 100px)" };

    return (
        <>
            <Provider store={store}>
                        <Humber
                            open={open}
                            hamburgarCliclHandler={hamburgarCliclHandler}
                        />
                        <div style={myStyle} onClick={closeNav}>
                            <Basket />
                            <Routes>
                                <Route
                                    path="/dummy/:id"
                                    element={<ProductDetails />}
                                />
                                <Route
                                    path="/fakestoreapi/:id"
                                    element={<ProductDetails />}
                                />
                                <Route
                                    path="/escuelajs/:id"
                                    element={<ProductDetails />}
                                />
                                <Route
                                    path="/categories/*"
                                    element={<Categories />}
                                />
                                <Route path="/cart" element={<Cart />} />
                                <Route path="/aboutus" element={<AboutUs />} />
                                <Route
                                    path="/notfound"
                                    element={<NotFound />}
                                />
                                <Route exact path="/" element={<Home />} />
                                <Route
                                    path="/*"
                                    element={<Navigate to="/notfound" />}
                                />
                            </Routes>
                        </div>
            </Provider>

            <Footer />
        </>
    );
};

export default App;
