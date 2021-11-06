import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { authSelectors } from "redux/auth";

export default function PrivateRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getLoggedIn);

  return (
    <Route {...routeProps}>{isLoggedIn ? children : <Redirect to="/" />}</Route>
  );
}
