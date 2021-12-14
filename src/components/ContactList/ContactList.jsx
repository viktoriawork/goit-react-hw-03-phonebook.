import React from "react";
import ContactListStyled from "./ContactListStyled";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ContactListStyled>
      {contacts.map((contact) => {
        const { id, name, number } = contact;

        return (
          <li className="item" key={id}>
            <p className="name">{name}:</p>
            <p className="number">{number}</p>
            <button
              className="delBtn"
              type="button"
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ContactListStyled>
  );
};

export default ContactList;
