import React, { Fragment, useEffect, useState } from "react";
import { WishlistItem } from "./wishlistItem";
import styled from "styled-components";
import axios from "axios";
import { v4 } from "uuid";
import { EmptyCart } from "../ShoppingBag/EmptyCart";
import { useSelector } from "react-redux";
import { ArrowImg, Continue } from "../ShoppingBag/shoppingBag.style";
import arrow from "../ShoppingBag/arrow.png";
import { useHistory } from "react-router";
import { mediaQueryMobile } from "../../styledComponents/MediaBreakpointsMixin";
import { Button } from "../common/Button/Button";
import { Spinner } from "../Spinner/Spinner";

export const Wishlist = props => {
  const [products, setProducts] = useState([]);
  const [isMobile, setMobile] = useState({});
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const lengthFav = useSelector(state => state.favorites.favArr.length);
  const handleWindowSizeChange = () => setMobile({ width: window.innerWidth });
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
  }, []);
  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
      const res = await axios.get("/products");
      setProducts(res.data);
    };
    fetchPosts();
    setLoading(false);
  }, []);

  const ListProduct = products.map(products => {
    return (
      <WishlistItem
        key={v4()}
        itemNo={products.itemNo}
        img={products.imageUrls[0]}
        id={products._id}
        name={products.name}
        previousPrice={products.previousPrice}
        currentPrice={products.currentPrice}
        collection={products.collection}
      />
    );
  });

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {lengthFav > 0 ? (
            <Fragment>
              {window.matchMedia(`(min-width: ${mediaQueryMobile}px)`)
                .matches || isMobile.width > mediaQueryMobile ? (
                <Continue onClick={() => history.push("/products")}>
                  <ArrowImg src={arrow} />
                  Continue Shopping
                </Continue>
              ) : null}
              {ListProduct}
              {window.matchMedia(`(max-width: ${mediaQueryMobile}px)`)
                .matches || isMobile.width < mediaQueryMobile ? (
                <ButtonWrapper>
                  <Button
                    secondary
                    width={"100%"}
                    value={"GO BACK TO SHOPPING"}
                  />
                </ButtonWrapper>
              ) : null}
            </Fragment>
          ) : (
            <EmptyCart text={"Yor Wishlist is currently empty."} />
          )}
        </>
      )}
    </>
  );
};

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
`;
