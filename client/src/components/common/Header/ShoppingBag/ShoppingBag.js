import React from "react";
import { useSelector } from "react-redux";
import {
  Icon,
  ServicesIcon,
  ShoppingBagIcon,
  ShoppingBagCounter,
  CounterMobile
} from "./shoppingBag.styles";
import{
  LoginForm,
  CreateAccountForm,
  RegisterForm
}from "../index"
import styled from "styled-components";

export const ShoppingBag = (props) => {
console.log("TCL: ShoppingBag -> props", props)
  
  // Use state Local Store Cart Quantity if not logged in,
  // after login use state.shoppingCart.srvCart Cart Quantity from Server
  // After Login the Two Carts are merged
  const count = useSelector(state => {
    const localCartCount = Object.values(state.shoppingCart.locCart).reduce(
      (acc, curr) => acc + curr,
      0
    );
    return state.login.token

      ? state.shoppingCart.srvCart.reduce(
        (acc, curr) => acc + curr.cartQuantity,
        0
      ) + localCartCount
      : localCartCount;
  });
  const user = useSelector(state => state.user);

  if (user) {
    return (
      //if logined open cart 
      <ServicesIcon to="/account/shopping-bag">
        <ShoppingBagIcon />
        <ShoppingBagCounter>({count})</ShoppingBagCounter>
        <CounterMobile>{count}</CounterMobile>
      </ServicesIcon>
    );
  }
  else {
    return (
      // <LoginForm/>
//if not logined  icon onclick goes to LoginForm

    <Icon onClick={props.onLoginClick}>
        <ShoppingBagIcon />
        <ShoppingBagCounter>({count})</ShoppingBagCounter>
        <CounterMobile>{count}</CounterMobile>
        {props.isModalOpen && (
            <LoginForm
              onRegister={props.onRegister}
              onClose={() => props.toggleModal(false)}
            />
          )}
          {props.isRegisterOpen && (
            <RegisterForm
              onClose={() =>props.toggleRegistration(false)}
              onLogin={props.GoBackToLogin}
              onRegister={props.onRegisterSuccess}
            />
          )}
          {props.isSuccess && (
            <CreateAccountForm onClose={() => props.toggleSuccess(false)} />
          )}
          
     </Icon>
    )
  }
};
