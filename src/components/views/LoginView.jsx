import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { authSelectors } from "redux/auth";
import { logIn } from "redux/auth/auth-operations";
import {
  Label,
  Input,
  Submit,
  FormS,
  Title,
  Error,
} from "../views-styles/LoginView.styled";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function LoginView() {
  const dispatch = useDispatch();

  const error = useSelector(authSelectors.getError);
  const loading = useSelector(authSelectors.getLoading);
  const isLoggedIn = useSelector(authSelectors.getLoggedIn);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, button } = e.target;
    button.disabled = { loading };

    dispatch(logIn({ email: email.value, password: password.value }));
    e.target.reset();
  };

  return (
    <>
      <FormS onSubmit={handleSubmit}>
        <Title>Log In</Title>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
          title="Input valid email address"
          required
        />

        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$"
          title="Password should contain from 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter"
          autoComplete="off"
          required
        />
        <br />
        <Submit type="submit" id="button">
          Log in
        </Submit>

        <Loader
          visible={loading}
          type="Circles"
          color="#d0ff00"
          height={20}
          width={20}
        />
      </FormS>

      {error && <Error>{error}</Error>}

      {isLoggedIn ? <Redirect exact to="/" /> : null}
    </>
  );
}
