// import Form from "../Form";
// import Filter from "../Filter";
// import ContactList from "../ContactList";
// import { Container, Title, SecondaryTitle, Spinner } from "./index";
// import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import { useGetContactsQuery } from "API/contacts-api";

// import { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router";
import AppBar from "../AppBar/AppBar";
// import Loader from "react-loader-spinner";
// import { spinner } from "./components/styles/App.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import { Title } from "./App.styled";
import HomeView from "../views/HomeView";
// import MainView from "../views/MainView";
import LoginView from "../views/LoginView";
import RegisterView from "../views/RegisterView";
// import UserView from "../views/UserView";

export default function App() {
  return (
    <div>
      <AppBar />
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        {/* <Route path="/contacts" component={UserView}/> */}
        <Redirect exact to="/" />
      </Switch>
    </div>
  );
}
