import React, { Component } from 'react';

import style from './Search.module.css'



class Search extends Component {
    render() {
        return (
            <div onClick={()=> alert("It still doesn't work")} onKeyDown={()=> alert("It still doesn't work")} className={style.container}>
                <input  className={style.SearchBox} type='text' placeholder='Search...'/>
                <button className={style.searchBtn} > Search</button>
            </div>
        );
    }
}

export default Search;