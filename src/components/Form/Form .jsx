import { Label, Input, Submit, FormS, Spinner } from "./index";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { getContacts, addContact } from "redux/contacts/contacts-operations";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function onSubmit(e, contacts, addContact, dispatch) {
  e.preventDefault();

  const { name, number } = e.target;
  const foundEl = contacts?.find(
    (el) => el.name.toLowerCase() === name.value.toLowerCase()
  );

  foundEl
    ? alert(`${name.value} is already in your contacts!`)
    : dispatch(addContact({ name: name.value, number: number.value }));

  e.target.reset();
}

export default function Form() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getContacts()), [dispatch]);

  const { contacts, addContactLoading } = useSelector(
    (state) => state.contacts
  );

  return (
    <FormS onSubmit={(e) => onSubmit(e, contacts, addContact, dispatch)}>
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        name="name"
        placeholder="Enter your name"
        id="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <Label htmlFor="number">Number</Label>
      <Input
        type="tel"
        name="number"
        id="number"
        placeholder="Enter your number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />
      <Submit type="submit" value="Add contact" />

      <Spinner>
        <Loader
          visible={addContactLoading}
          type="Circles"
          color="#d0ff00"
          height={20}
          width={20}
        />
      </Spinner>
    </FormS>
  );
}
