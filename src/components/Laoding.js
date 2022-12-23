import React from 'react';

import style from './Laoding.module.css'
const Laoding = () => {
    return (
        <>
        <div className={style.container}>
            <div className={style.Glasscontiner}>
                <div className={style.glass}></div>
                <div className={style.squre}></div>
                <div className={style.circle}></div>
            </div>
        </div>
        </>
    );
};

export default Laoding;