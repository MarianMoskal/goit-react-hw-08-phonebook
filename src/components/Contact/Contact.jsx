import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  Item,
  Name,
  Button,
  // , Spinner
} from "./Contact.styled";
import { removeContact } from "redux/contacts/contacts-operations";
// import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export default function Contact({ props: { name, number, id } }) {
  const dispatch = useDispatch();
  const { removeContactLoading } = useSelector((state) => state.contacts);

  const onClick = (e) => {
    e.target.value = "Wait";
    e.target.disabled = { removeContactLoading };
    dispatch(removeContact(e.target.id));
  };

  return (
    <>
      <Item>
        <Name>{name} :</Name>
        {number}
      </Item>

      <Button type="button" id={id} value="Delete" onClick={onClick} />

      {/* <Spinner>
        <Loader
          // visible={}
          type="Circles"
          color="#d0ff00"
          height={20}
          width={20}
        />
      </Spinner> */}
    </>
  );
}

Contact.propTypes = {
  props: PropTypes.exact({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
