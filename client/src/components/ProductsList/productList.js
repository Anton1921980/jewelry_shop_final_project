import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProductItem } from "./productItem";

import styled from "styled-components";

const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/products");
      setProducts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const ListProduct = products.map(product => {
    return (
      <ProductItem
        id={product.itemNo}
        key={product._id}
        img={product.imageUrls[0]}
        name={product.name}
        previousPrice={product.previousPrice}
        collection={product.collection}
      />
    );
  });
  return <Wrapper>{ListProduct.splice(0, 9)}</Wrapper>;
};
//Using splice for products array instead the pagination.

export const ProductsList = () => {
  return <ListProducts />;
};

//*** STYLED-COMPONENTS ***//

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  margin: 0 auto;
  max-width: 920px;
  width: 80%;
`;
