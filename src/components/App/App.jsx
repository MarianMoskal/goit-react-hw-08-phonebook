import { Switch } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense, useEffect } from "react";
import { fetchCurrentUser } from "redux/auth/auth-operations";
import PrivateRoute from "components/PrivateRoute";
import PublicRoute from "components/PublicRoute";
import AppBar from "../AppBar/AppBar";
import { authSelectors } from "redux/auth";
import { Title } from "./App.styled";

// import UserView from "../views/UserView";
// import HomeView from "../views/HomeView";
// import LoginView from "../views/LoginView";
// import RegisterView from "../views/RegisterView";

const UserView = lazy(() => import("../views/UserView"));
const HomeView = lazy(() => import("../views/HomeView"));
const LoginView = lazy(() => import("../views/LoginView"));
const RegisterView = lazy(() => import("../views/RegisterView"));

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(authSelectors.getLoading);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Title>Loading...</Title>
      ) : (
        <>
          <AppBar />
          <Switch>
            <Suspense fallback={<Title>Loading...</Title>}>
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>

              <PublicRoute path="/register" restricted>
                <RegisterView />
              </PublicRoute>

              <PublicRoute path="/login" restricted>
                <LoginView />
              </PublicRoute>

              <PrivateRoute path="/contacts">
                <UserView />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
    </>
  );
}
