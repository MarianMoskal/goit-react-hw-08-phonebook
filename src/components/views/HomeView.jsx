// import Form from "../Form";
// import Filter from "../Filter";
// import ContactList from "../ContactList";
import { Title } from "../views-styles/HomeView.styled";
import ContactsView from "./UserView";
// import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import { useGetContactsQuery } from "API/contacts-api";
import { useSelector } from "react-redux";

export default function HomeView() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return !isLoggedIn ? (
    <Title>
      Welcome to your phonebook. <br /> Please log in or sign up.
    </Title>
  ) : (
    <ContactsView />
  );
}
