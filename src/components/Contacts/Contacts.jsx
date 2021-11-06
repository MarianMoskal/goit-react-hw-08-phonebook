import { useDispatch, useSelector } from "react-redux";
import { Item } from "./Contacts.styled";
import Contact from "../Contact";
import makeFilteredContacts from "helpers/makeFilteredContacts";
import { contactsSelectors } from "redux/contacts";
import { getContacts } from "redux/contacts/contacts-operations";
import { useEffect } from "react";

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getContacts()), [dispatch]);

  const { contacts } = useSelector((state) => state.contacts);
  const filter = useSelector(contactsSelectors.getFilterFromState);
  const emptyFilter = filter.trim() === "";

  return (
    <>
      {emptyFilter
        ? contacts.map((contact) => (
            <Item key={contact.id}>
              <Contact props={contact} />
            </Item>
          ))
        : makeFilteredContacts(contacts, filter.toLowerCase()).map(
            (contact) => (
              <Item key={contact.id}>
                <Contact props={contact} />
              </Item>
            )
          )}
    </>
  );
}
