import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { Modal } from "../../Modal/Modal";
import { Button } from "../../common/Button/Button";
// import { LoginForm } from "../LoginForm/LoginForm";

import {
  FormWrapper,
  FormTitle,
  FormSubtitle,
  ButtonWrapper,
  Holder
} from "./shoppingBagForm.styles";
import { Login, ShoppingBag } from "../../common/Header";

export const ShoppingBagForm = props => {
  const history = useHistory();
  const { isModalOpen, onClose } = props;
  // const [form, setForm] = useState();
  const user = useSelector(state => state.user);
  if (user) {
    return (
      <Modal isModalOpen={isModalOpen} onClose={onClose}>
        <FormWrapper>
          <FormTitle>Shopping Bag</FormTitle>
          <FormSubtitle>You have a new item in your shopping bag.</FormSubtitle>
          <ButtonWrapper>
            <Holder>
              <Button
                onClick={() => history.push("/account/shopping-bag")}
                type="button"
                value="CHECKOUT"
                width={"100%"}
              />
            </Holder>
            {/* <LoginForm/> */}
            <Holder>
              <Button
                secondary
                type="button"
                onClick={onClose}
                value="GO BACK TO SHOPPING"
                width={"100%"}
              />
            </Holder>
          </ButtonWrapper>
        </FormWrapper>
      </Modal>
    );
  }
  else{
    return(
      <>
      <Modal isModalOpen={isModalOpen} onClose={onClose}>
        <FormWrapper>
          <FormTitle>Shopping Bag</FormTitle>
          <FormSubtitle>You have a new item in your shopping bag.</FormSubtitle>
          <ButtonWrapper>
            <Holder>
              <Button
                // onClick={() => history.push("/login-form")}
                onClick={() => history.goBack}
                type="button"
                value="CHECKOUT"
                width={"100%"}
              />
            </Holder>
            {/* <LoginForm/> */}
            <Holder>
              <Button
                secondary
                type="button"
                onClick={onClose}
                value="GO BACK TO SHOPPING"
                width={"100%"}
              />
            </Holder>
          </ButtonWrapper>
        </FormWrapper>
      </Modal>
      <ShoppingBag notuser={"notuser"}/>
      </>
    )
  }
};
