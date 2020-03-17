import React from "react";
import styled from "styled-components/macro";

import close from "./modal-close-btn.png";

export const CartItem = ({ props, handleDel, handleQty }) => {
  return (
    <ItemContainer>
      <div className="product">
        <ImgWrap>
          <ProdImg src={`../${props.img}`} />
        </ImgWrap>
        <ProductDescription>
          <Description>{props.description}</Description>
          <ArticleNo>Article no.: {props.itemNo}</ArticleNo>
          <RemoveBtn onClick={() => handleDel(props.id)}>
            <CloseImg src={close} />
            Remove
          </RemoveBtn>
        </ProductDescription>
      </div>
      <div>{props.price.toLocaleString("de-CH")} UAH</div>
      <div>
        <StyledSelect>
          <select
            defaultValue={props.qty}
            onChange={event => handleQty(event, props.id)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </StyledSelect>
      </div>
      <div>{props.productTotal.toLocaleString("de-CH")} UAH</div>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 230px;
  padding: 21px 0 21px 0;
  border-bottom: 1px solid #a7aabb;
  &:first-child {
    border-top: 1px solid #a7aabb;
  }
  & .product {
    display: flex;
    flex: 3;
    text-align: left;
    align-items: center;
  }

  & > div {
    flex: 1;
    text-align: center;
  }
`;

const ProdImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const ImgWrap = styled.div`
  flex: 1;
  height: 188px;
  margin-right: 20px;
  border: 1px solid #e9ebf5;
`;

const ProductDescription = styled.div`
  flex: 50%;
  height: 135px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const Description = styled.p`
  text-transform: uppercase;
  line-height: 24px;
  width: 75%;
  margin-bottom: 12px;
  flex: 1;
`;

const ArticleNo = styled.p`
  line-height: 10px;
  color: #a1a5ad;
  flex: 1;
`;
const RemoveBtn = styled.div`
  line-height: 10px;
  text-decoration-line: underline;
  flex: 1;
  cursor: pointer;
`;

const CloseImg = styled.img`
  height: 14px;
  width: 14px;
  margin-right: 12px;
  vertical-align: middle;
`;

const StyledSelect = styled.div`
  border-bottom: 1px solid black;
  width: 31px;
  height: 24px;
  position: relative;
  margin: 0 auto;

  &:after {
    content: "";
    top: 5px;
    right: 4px;
    position: absolute;
    border: solid #262c37;
    border-width: 0 1px 1px 0;
    padding: 4px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    z-index: -1;
  }
  & select {
    border: none;
    box-shadow: none;
    background-color: transparent;
    background-image: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-size: 14px;
    font-family: "Montserrat", system-ui, sans-serif;
    width: 31px;
    height: 24px;
    cursor: pointer;
  }
  & ~ select:focus {
    outline: none;
  }
`;
