import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { StaticPageView } from "../components/StaticPageView/staticPageView";
import { Homepage } from "../components/homePage/HomePage";
import { ProductFilters } from "../components/ProductsFilterList";
import { GiftCardView } from "../components/GiftCardsView/GiftCardView";
import { ProductDetailsLayout } from "../components/ProductDetails";
import {
  AccountRoute,
  PersonalInformationRouter
} from "../components/PersonalDetails/MobilePersonalInformation/MobilePersonalInformation";
import { ChangePasswordRouter } from "../components/PersonalDetails/MobileChangePassword/MobileChangePassword";
import { ShoppingBag } from "../components/ShoppingBag";
import { Error } from "../components/404error";
import { Checkout } from "../components/Checkout";
import { WishlistView } from "../components/Wishlist/WishlistView";
import { WishlistRouter } from "../components/PersonalDetails/MobileWishlist/MobileWishlist";

export const Routes = () => {
  const user = useSelector(state => state.user);

  return user ? (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/headerMenu/:chosenMenu" component={ProductFilters} />
      <Route exact path="/giftсards" component={GiftCardView} />
      <Route path="/categories/:homepagecategory" component={ProductFilters} />
      <Route path="/products" component={ProductFilters} />
      <Route path="/product-details/:id" component={ProductDetailsLayout} />
      <Route exact path="/account" component={AccountRoute} />
      <Route
        exact
        path="/account/personal-information"
        component={PersonalInformationRouter}
      />
      <Route
        exact
        path="/account/change-password"
        component={ChangePasswordRouter}
      />
      <Route exact path="/account/wish-list" component={WishlistRouter} />
      <Route exact path="/favorites" component={WishlistView} />
      <Route exact path="/account/shopping-bag" component={ShoppingBag} />
      <Route exact path="/account/checkout" component={Checkout} />
      <Route exact path="/logout" component={ProductFilters} />
      <Route exact path="/404error" component={Error} />
      <Route exact path="/pages/:url" component={StaticPageView} />
    </Switch>
  ) : (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/favorites" component={WishlistView} />
      <Route path="/headerMenu/:chosenMenu" component={ProductFilters} />
      <Route exact path="/giftсards" component={GiftCardView} />

      <Route path="/categories/:category?" component={ProductFilters} />
      <Route path="/products/:all_categories?" component={ProductFilters} />

      {/* <Route path="/categories/:homepagecategory" component={ProductFilters} />
      <Route path="/products" component={ProductFilters} /> */}
      
      <Route path="/product-details/:id" component={ProductDetailsLayout} />
      <Route path="/login" component={ProductFilters} />
      <Route path="/404error" component={Error} />
      <Route exact path="/pages/:url" component={StaticPageView} />
      <Redirect to="/" />
    </Switch>
  );
};
