import React from 'react';


import styled from 'styled-components';

const H1=styled.h1`
    text-align: center;
    font-size: 16px ;
    color: #fff;
    margin-top: 1px;

`;

const Footer=() =>{
        return (
            <div style={{background:'#323532', height:'50px', width:'100%' ,marginTop:0}}>
                <H1 >
                    @ all right reserved 2022
                </H1>
            </div>
        );
}

export default Footer;