import Form from "../Form";
import Filter from "../Filter";
import ContactList from "../ContactList";
import {
  Container,
  Title,
  SecondaryTitle,
  Spinner,
} from "../views-styles/UserView.styled";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useGetContactsQuery } from "API/contacts-api";
// import { useSelector } from "react-redux";
// import axios from 'axios';

export default function UserView() {
  // const token = useSelector(state => state.auth.token)
  const { data: contacts, error, isFetching: loading } = useGetContactsQuery();

  // axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  // // console.log(loading);
  // const contacts = axios.get("https://connections-api.herokuapp.com/contacts")
  // console.log(contacts)

  return (
    <>
      <Container>
        <Title>Phonebook</Title>
        <Form />
      </Container>

      {error ? <SecondaryTitle>{error.data}</SecondaryTitle> : null}

      {contacts?.length > 0 ? (
        <Container>
          <SecondaryTitle>Contacts</SecondaryTitle>
          <Filter />
          <ContactList />
        </Container>
      ) : null}

      {!contacts && !loading && !error && (
        <SecondaryTitle>No contacts yet</SecondaryTitle>
      )}

      {loading ? (
        <Spinner>
          <Loader
            visible={loading}
            type="Circles"
            color="#d0ff00"
            height={50}
            width={50}
          />
        </Spinner>
      ) : null}
    </>
  );
}
