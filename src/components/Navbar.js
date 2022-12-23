import React, {useState} from 'react';


import { Link } from 'react-router-dom';
import styled from 'styled-components';

import clothe from "../assets/icon/clothes-svgrepo-com.svg"

const Container=styled.header`
  background: rgba(33, 33, 33 ,.9);
  height: 53px;
  transition: .3s;
  margin-bottom: 1px;
  position: sticky;
  top: 0;
  z-index: 10;

  .header{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
  }
  .header > div > ul{
    display: flex;
    gap: 65px;
    @media (max-width: 670px ) {
      gap: 45px;
    }
  }
  ul li{
    list-style: none; 
    font: 600 17px/20px arial;
    color: white;
    a{
      text-decoration: none;
      color: #fff;
      transition: color .3s ease;
      &:hover{
        color: orange;
      }
    }
    &:nth-child(2){
      position: relative;
    }
  }

  

@media (max-width:500px){
  background: rgba(33, 33, 33,.95);

  .header {
    flex-direction: column;
    align-items: flex-start;
    
    .ulContainer{
      flex-direction: column;
      gap: 30px;
      padding-top: 50px;
      li{
        font-size: 19px;
      }
    }    
    .icon{
      display: none;
    }
    
  }
}
@media (max-width:500px){
  width: 250px;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  transform: ${(props) => (props.open ? 'translateX(100%)' : 'translateX(0)')};
}
`;

const CategoriesList=styled.div`
    width: 190px;
    height: 230px;
    position: absolute;
    left: -55%;
    border-radius: 10px;
    border: 2px solid orange;
    transform: ${props => (props.show ? "scaleY(1)" : 'scaleY(0)') };
    transform-origin: top;
    background-color: rgba(250, 250, 250, .9);
    transition: transform .3s ease ;
    
    ul{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 20px;
      gap: 22px;
      img{
        width:  23px;
        height: 23px;
        vertical-align: bottom;
      }
    }
    ul li a{
      color: black;
    }

    @media (max-width:500px){
      position:  ${(props) => (props.show ? 'relative' : 'absolute')};
      width: 230px;
      left: auto;
    }

  `;

const Navbar = ({open}) => {

    const [categoriesListShow , setCategoriesListShow]=useState(false);
    
    return (
        <>
          <Container open={open}>
            <div className='header'>
              <div> 
                <ul className='ulContainer'>
                  <li><Link to='/'>Home Page</Link></li>
                  <li onMouseEnter={() => setCategoriesListShow(true)} onMouseLeave={() => setCategoriesListShow(false)}><Link to='/categories'>Categories</Link>
                      <CategoriesList show={categoriesListShow} onMouseEnter={() => setCategoriesListShow(true)} onMouseLeave={() => setCategoriesListShow(false)}>
                        <ul>
                          <li><Link to="/categories/Electronics" >Electronics <i className="fa-solid fa-laptop-medical"></i></Link></li>
                          <li><Link to="/categories/Furniture" >Furniture <i className="fa-solid fa-chair"></i></Link></li>
                          <li><Link to="/categories/Clothes" >Clothes <img src={clothe} alt="ico" /> </Link></li>
                          <li><Link to="/categories/Shoes" >Shoes <i className="fa-solid fa-shoe-prints"></i></Link></li>
                          <li><Link to="/categories/Others" >Others</Link></li>
                        </ul>
                      </CategoriesList>
                  </li>
                  <li><Link to='/aboutus'>About Us</Link></li>
                </ul>
              </div>
            </div>
          </Container>
        </>
    );
};

export default Navbar;