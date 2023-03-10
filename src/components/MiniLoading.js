import React from 'react';
import styled from 'styled-components';

const Container=styled.div`
  margin: 0 auto;
  width: 140px;
  height: 40px;
  .lds-ellipsis {
    display: inline-block;
    position: relative;
    left: 3px;
    width: 150px;
    height: 40px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 3px;
    width: 33px;
    height: 33px;
    border-radius: 50%;
    background: rgb(79, 157, 200);
    background: orange;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 14px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 49px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 93px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(30px, 0);
    }

}`;


const MiniLoading = () => {
    return (
        <>
            <Container>
                <div className="lds-ellipsis">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
            </Container>
        </>
    );
};

export default MiniLoading;