import React from 'react';

import Navbar from './Navbar';
import styled from 'styled-components';

const HamburgarMenu=styled.div`
    width: 32px;
    margin-right: 5px;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 7px;
    z-index: 20;
    cursor: pointer;
    
    span{
        display: inline-block;
        width: 30px;
        height: 3px;
        background-color: #fff;
        background-color: ${(props) => (props.open ? 'gray' : 'white')};
        transform-origin:1px;
        transition: all .3s;
        &:nth-child(1){
            transform: ${(props) => (props.open ? 'rotate(0)' : 'rotate(45deg)')};
        }
        &:nth-child(2){
            transform: ${(props) => (props.open ? 'translateX(0)' : 'translateX(-100%)')};
            opacity: ${(props) => (props.open ? 1 : 0)};
        }
        &:nth-child(3){
            transform: ${(props) => (props.open ? 'rotate(0)' : 'rotate(-45deg)')};
        }
    }

    @media (max-width:500px) {
        display: flex;
        position: fixed;
        top:13px;
        right: 10px;
    }
`;


const Humber= ({open , hamburgarCliclHandler}) =>{
        return (
            <>
            <HamburgarMenu open={open} onClick={hamburgarCliclHandler}>
                <span className='firstHum'></span>
                <span className='secendHum'></span>
                <span className='thirdHum'></span>
            </HamburgarMenu>
                <Navbar open={open} />
            </>
        );
}

export default Humber;