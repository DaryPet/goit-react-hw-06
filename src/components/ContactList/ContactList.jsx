import Contacts from "../Contacts/Contacts.jsx";
import css from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice.js";
// import { selectContacts } from "../../redux/selector";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contacts data={contact} onDelete={handleDelete} />
          {/* <Contacts onClick={() => dispatch(deleteContact(id))} /> */}
        </li>
      ))}
    </ul>
  );
}
