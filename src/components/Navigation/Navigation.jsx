import UserMenu from "components/UserMenu/UserMenu.jsx";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authSelectors } from "redux/auth";
import {
  Nav,
  // , Button, navLink, activeLink
} from "./Navigation.styled.jsx";

const Navigation = () => {
  const style = { color: "blue" };
  const activeStyle = { color: "white" };
  const isLoggedIn = useSelector(authSelectors.getLoggedIn);

  return (
    <>
      <Nav>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <>
            <NavLink exact to="/" style={style} activeStyle={activeStyle}>
              <span>Home</span>
            </NavLink>

            <NavLink to="/login" style={style} activeStyle={activeStyle}>
              <span>Log in</span>
            </NavLink>

            <NavLink to="/register" style={style} activeStyle={activeStyle}>
              <span>Sign up</span>
            </NavLink>
          </>
        )}
      </Nav>
    </>
  );
};

export default Navigation;
