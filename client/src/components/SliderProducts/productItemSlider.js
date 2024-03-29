import React from "react";
import {
  Heart,
  HeartRose,
  Image,
  Name,
  Price,
  WishWrapper
} from "../ProductDetails/productDetails.styles";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, removeFavorites } from "../../store/favorites";

//на homepage работает без http://localhost:3000/ и только до ухода со страницы
export const ProductItem = props => {
  const dispatch = useDispatch();
  const isFavorites = useSelector(state =>
    state.favorites.favArr.some(id => id === props.id)
  );
  const clickFavorites = (e, props) => {
    e.preventDefault();
    isFavorites
      ? dispatch(removeFavorites(props.id))
      : dispatch(addFavorites(props.id));
  };
  const FavoriteButton = () => {
    return isFavorites ? (
      <WishWrapper item={true}>
        <HeartRose onclick={clickFavorites}>&#9825;</HeartRose>
      </WishWrapper>
    ) : (
      <WishWrapper item={true}>
        <Heart onclick={clickFavorites}>&#9825;</Heart>
      </WishWrapper>
    );
  };
  return (
    <Card key={props.key} itemNo={props.itemNo}>
      <FavoriteButton />
      <Image
        alt=""
        src={process.env.PUBLIC_URL + "/" +props.imageUrls[0]}
        size={"small"}
      />
      <Name
        size={"small"}
        style={{ height: "80px" }}
      >{`${props.name} "${props.collection}"`}</Name>
      <Price size={"small"}>{props.currentPrice}</Price>
    </Card>
  );
};

//*** STYLED-COMPONENTS ***//

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgb(233, 235, 245);
  margin: 5px;
  max-width: 280px;
  height: 392px;
`;
