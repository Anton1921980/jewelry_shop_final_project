import React from "react";
import styled from "styled-components";
import { Layout } from "../common/Layout";
import { Wishlist } from "./Wishlist";
import { PageHeader } from "../common/PageHeader/PageHeader";

export const WishlistView = (props) => {
  return (
    <Layout>
      <FavoritesWrapper>
        <PageHeader>FAVORITES</PageHeader>
      </FavoritesWrapper>
      <Container>
        <Wishlist />
      </Container>
    </Layout>
  );
};

const FavoritesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 5px auto 50px auto;
  padding: 0 4%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
