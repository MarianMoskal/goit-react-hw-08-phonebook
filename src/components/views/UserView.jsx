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
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "redux/contacts/contacts-operations";
import { useEffect } from "react";

export default function UserView() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getContacts()), [dispatch]);

  const { contacts, getContactsLoading, error } = useSelector(
    (state) => state.contacts
  );

  return (
    <>
      <Container>
        <Title>Phonebook</Title>
        <Form />
      </Container>

      {error ? (
        <SecondaryTitle>Ooops... Something went wrong</SecondaryTitle>
      ) : null}

      {contacts?.length > 0 ? (
        <Container>
          <SecondaryTitle>Contacts</SecondaryTitle>
          <Filter />
          <ContactList />
        </Container>
      ) : null}

      {contacts?.length === 0 && !getContactsLoading && !error && (
        <SecondaryTitle>No contacts yet</SecondaryTitle>
      )}

      {getContactsLoading ? (
        <Spinner>
          <Loader
            visible={getContactsLoading}
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
