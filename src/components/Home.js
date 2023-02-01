import React from 'react';


import Search from './Search';
import style from './Home.module.css'
import { Link } from 'react-router-dom';

const Home= ()=>{
        return (
            <>
                <div className={style.image}>
                    <h1>Online Shopp</h1>
                    <h3>Review and buy your favorait :)</h3>
                    <Search />
                    <Link to="/categories" className={style.goto}>Go To Shop</Link>
                </div>
            </>
        );
}

export default Home;