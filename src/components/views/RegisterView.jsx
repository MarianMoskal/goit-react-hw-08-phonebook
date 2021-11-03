import React from "react";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/auth-operations";
import {
  Label,
  Input,
  Submit,
  FormS,
  Title,
  Spinner,
} from "../views-styles/RegisterView.styled";

export default function RegisterView() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, name } = e.target;

    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    e.target.reset();
  };

  return (
    <>
      <FormS onSubmit={handleSubmit}>
        <Title>Sign Up</Title>

        <Label htmlFor="name">Name</Label>
        <Input
          type="name"
          name="name"
          id="name"
          placeholder="Enter your name"
          pattern="[A-Za-z0-9]+"
          title="Enter letters and numbers only, no punctuation or special characters"
          required
        />

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
          Sign up
        </Submit>
      </FormS>
    </>
  );
}
