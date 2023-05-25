import { useEffect } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "utilites/api";
import { getError, getIsLoading } from "redux/selectrs";

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, dispatch)

    return (
      <div>
        <h1>Phonebook</h1>
          <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
   );
};
