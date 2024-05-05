import Contacts from "../Contacts/Contacts.jsx";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

import { selectContact } from "../../redux/contactsSlice.js";
import { selectNameFilter } from "../../redux/filtersSlice.js";

export default function ContactList({ onDelete }) {
  const contacts = useSelector(selectContact);
  const filter = useSelector(selectNameFilter);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contacts data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
