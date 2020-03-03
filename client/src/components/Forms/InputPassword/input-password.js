import React, {useState} from "react";
import styled from "styled-components";

export const InputPassword = props => {
  const [password, setPassword] = useState("");
  const [passwordValidation, setPasswordValidation] = useState(true);

  return (
    <Input
      type="password"
      placeholder={props.placeholder}
      value={password}
      invalid={!passwordValidation}
      onChange={onChange}
      onBlur={onPasswordBlur}
    />
  );

  function onChange(event) {
    setPassword(event.target.value);
    props.onPasswordChange(event.target.value);
  }

  function isPasswordValid(password) {
    if (password.length < 6) {
      return false;
    } else {
      return true;
    }
  }

  function onPasswordBlur() {
    const status = isPasswordValid(password);
    setPasswordValidation(status);
  }
};

const Input = styled.input`
  width: 100%;
  margin-bottom: 30px;
  padding-bottom: 5px;
  border: none;
  border-bottom: 1px solid #80858d;
  border-bottom-color: ${props => (props.invalid ? "red" : "#80858D")};
  letter-spacing: 0.5px;
  font-size: 12px;

  :-webkit-autofill {
    -webkit-box-shadow: inset 0 0 0 50px #fff !important;
    -webkit-text-fill-color: #999 !important;
    color: #999 !important;
  }

  ::placeholder {
    color: #80858d;
  }

  :focus {
    outline: none;
  }
`;
