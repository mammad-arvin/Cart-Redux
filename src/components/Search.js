import React, { Component } from 'react';

import style from './Search.module.css'



class Search extends Component {
    render() {
        return (
            <div className={style.container}>
                <input className={style.SearchBox} type='text' placeholder='Search...'/>
                <button className={style.searchBtn} > Search</button>
            </div>
        );
    }
}

export default Search;