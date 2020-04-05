import React from "react";
import styled from "styled-components";
import { useParams, useLocation } from "react-router";

import { Layout } from "../common/Layout";
import IconBreadcrumbs from "./Breadcrumbs.js";
import { FiltersList } from "./FilterBar/FiltersList";
// import { Checkboxes } from "./FilterBar/PopupCheckboxes";
import { FilterIndicators } from "./SelectedProducts/FilterIndicators";
import { FilteredListProducts } from "./FilteredProducts";
import ProductsContainer from "./../SliderProducts/ProductsContainer";
import querystring from "query-string";

export const ProductFilters = props => {
  const { category } = useParams();

  let location = useLocation();
  let path = `filter${location.search}`;
  console.log("TCL: ProductFilters -> path", path);

  return (
    <Layout>
      <CategoriesHeader>
        <p>{category}</p>
      </CategoriesHeader>

      <IconBreadcrumbs categoryName={{ category }} />

      <CategotiesCommon>
        <CategoriesFilters>
          <p>FILTER BY </p>
          <FiltersList />
        </CategoriesFilters>

        <SelectedProducts>
          <p>Selected products</p>
          <FilterIndicators />
          {/* <FilteredListProducts category={category} /> */}
        </SelectedProducts>
        <ProductsContainer />
      </CategotiesCommon>
    </Layout>
  );
};

const CategoriesHeader = styled.div`
  background-color: black;
  width: 100vw;
  height: 250px;
  position: relative;
  & p {
    font-size: 40px;
    color: white;
    text-transform: uppercase;
    position: absolute;
    margin: 0;
    left: 129px;
    bottom: 111px;
  }
`;
const CategotiesCommon = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;
const CategoriesFilters = styled.div`
  margin-top: 29px;
  margin-left: 130px;
  min-width: 280px;
  width: 30%;
  & > p {
    font-size: 17px;
    margin-bottom: 54px;
  }
`;
const SelectedProducts = styled.div`
  & > p {
    font-size: 17px;
    margin-top: 28px;
    text-transform: uppercase;
    margin-bottom: 23px;
  }
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
