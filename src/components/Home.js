import React from 'react';


import Search from './Search';
import style from './Home.module.css'

const Home= ()=>{
        return (
            <>
                <div className={style.image}>
                    <h1>Online Shopp</h1>
                    <h3>Review and buy your favorait :)</h3>
                    <Search />
                </div>
            </>
        );
}

export default Home;