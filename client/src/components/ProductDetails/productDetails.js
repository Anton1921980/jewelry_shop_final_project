import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styled, { css } from "styled-components";

export const ProductDetails = () => {
    const [productsAllData, setProductsAllData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/products")
            .then(product => {
                setProductsAllData(product.data);
            })
            .catch(err => {
                /*Do something with error, e.g. show error to user*/
            });
    }, []);
    const products = (productsAllData) && productsAllData;

    return (
        <Container>
            <Image alt=''/>
            <Wrapper>
                <Name line={'true'}>{{...[...products][5]}.name}</Name>
                <Vendor>{`Article no.: ${{...[...productsAllData][5]}.itemNo}`}</Vendor>
                <PriceWrapper>
                    <Price>{`${{...[...productsAllData][5]}.currentPrice}`}</Price>
                    <WishWrapper><WishButton>Add to wish list</WishButton><Heart>&#9825;</Heart></WishWrapper>
                </PriceWrapper>
                <Add>Add to bag</Add>
                <Details>Details</Details>
                <UL>
                    <LI>{`Gemstone: ${{...[...productsAllData][3]}.gemstone}`} </LI>
                    <LI>{`Collection: ${{...[...productsAllData][3]}.collection}`}</LI>
                    <LI>{`Metal: ${{...[...productsAllData][3]}.metal}`}</LI>
                    <LI>{`Metal Color: ${{...[...productsAllData][3]}.metal_color}`}</LI>
                    <LI>{`Weight: ${{...[...productsAllData][3]}.weight}`}</LI>
                    <LI>{`Sample: ${{...[...productsAllData][3]}.sample}`}</LI>
                </UL>
            </Wrapper>
        </Container>
    )
};

//*** STYLED-COMPONENTS ***//

export const Container = styled.div`
    display: flex;
    max-width: 1200px;
    padding: 0 15px;
    margin: 0 auto;
    
    @media(max-width: 1200px) {
        max-width: 1024px;
    }
    @media(max-width: 1050px) {
        max-width: 991px;
    }
    @media(max-width: 992px) {
        max-width: 768px;
    }
    @media(max-width: 767px) {
        max-width: 540px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
     ${props => props.flex === 'column' && css`
        flex-direction: column;
  `}
`;
export const Wrapper = styled.div`
    width: 48%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
     @media(max-width: 767px) {
        width: 95%;
    }
`;

export const Image = styled.img`
    width: 570px;
    height: 558px;
     @media(max-width: 992px) {
        width: 520px;
        height: 508px;
    }
      @media(max-width: 767px) {
        width: 360px;
        height: 334px;
    }
    
     ${props => props.size === 'small' && css`
        width: 206px;
        height: 258px;
      @media(max-width: 992px) {
        width: 206px;
        height: 258px;
    }
      @media(max-width: 767px) {
        width: 156px;
        height: 208px;
    }
      @media(max-width: 439px) {
        width: 150px;
        height: 202px;
    }
  `}
`;
export const Name = styled.p`
   text-transform: uppercase;
   font-size: 30px;
   line-height: 40px;
   width: 100%;
      @media(max-width: 992px) {
        font-size: 20px;
    }
   
   ${props => props.line === 'true' && css`
    &:after { 
      content: " ";
      display: flex;
      align-self: center;
      margin-top: 11px;
      width: 100%;
      height: 1px;
      background: #3c3b3b;
      }
  `}
  ${props => props.size === 'small' && css`
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    
    @media(max-width: 992px) {
        font-size: 14px;
    }
    @media(max-width: 767px) {
         font-size: 12px;
         margin-bottom: 5px;
         
    }
  `}
`;
export const Vendor = styled.p`
   font-size: 14px;
   color: #a1a5ad;
`;
export const PriceWrapper = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;
export const Price = styled.div`
    margin-top: 5px;
    font-size: 16px;
    line-height: 21px;
    &:after {
    content: 'UAH';
    margin-left: 5px;
    display: inline;
    font-size: 12px;}
    ${props => props.size === 'small' && css`
        justify-self: flex-end;
     `};
    @media(max-width: 767px) {
       font-size: 14px;
    }
      @media(max-width: 439px) {
        font-size: 12px;
    }
`;
export const WishWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 135px;
    height: 30px; 
`;
export const WishButton = styled.span`
   font-size: 14px;
   padding-bottom: 4px;
`;
export const Heart = styled.button`
    position: relative;
    bottom: -2px;
    background: transparent;
    border: none;
    font-size: 24px;
    color: #262C37;
    
    &:focus {
        outline: none;
    }
    &:hover {
        font-size: 27px;
    }
`;
export const Add = styled.button`
    margin-top: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
    text-transform: uppercase;
    background-color: #002d50;
    border: 1px solid #002d50;
    width: 100%;
    font-size: 12px;
    color: #fff;
`;
export const Details = styled.div`
    text-transform: uppercase;
    font-size: 14px;
    padding-top: 21px;
    width: 100%;
    &:before {
      content: " ";
      display: flex;
      align-self: center;
      margin-bottom: 21px;
      width: 100%;
      height: 1px;
      background: #3c3b3b;
      }
    }
   `;
export const UL = styled.ul`
    align-self: flex-start;
    list-style: none;
`;
export const LI = styled.li`
    text-transform: capitalize;
    &:before {
    margin-right: 7px;
    content: '•';
    color: #a7aabb;
 }
`;