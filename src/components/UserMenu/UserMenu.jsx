// import React from 'react'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logOut } from "redux/auth/auth-operations";
import { Button } from "./UserMenu.styled";

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <span>
        Welcome, <b>{user.name}</b>
      </span>
      <Button onClick={() => dispatch(logOut())}>Log out</Button>
    </>
  );
}
