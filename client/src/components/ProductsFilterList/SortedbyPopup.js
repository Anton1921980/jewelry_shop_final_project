import React from "react";
import styled from "styled-components";
import dropArrow from "./images/DroppArrow.png";

export const SortedbyPopup = props => {
  const { setSortType, setIsOpenSortedPopup } = props;

  const selectAction = e => {
    setSortType(e.target.value);
    setIsOpenSortedPopup(false);
  };

  return (
    <MoadalContainer>
      <StyledSelect onChange={selectAction}>
        <option value="new products">new products</option>
        <option value="price increase">price increase</option>
        <option value="price decrease">price decrease</option>
      </StyledSelect>
    </MoadalContainer>
  );
};

const MoadalContainer = styled.div`
  line-height: 20px;
`;

const StyledSelect = styled.select`
  font-family: Montserrat;
  border: none;
  margin-left: 25px;
  appearance: none;
  background: url(${dropArrow}) no-repeat right center;
  min-width: 135px;
  outline: 0;
  input[type="select"]:focus {
    border: none;
  }
`;
