import { DeleteItem, ElementContact, Name, Number } from "./ContactsItem.styled";
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';

const ContactsItem = () => {
    const contacts = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter.value).toLowerCase();
    const dispatch = useDispatch();

    const visualContacts = contacts.filter(contact => 
        contact.name.toLowerCase().includes(filter)
    );

    return visualContacts.sort((a, b) => a.name > b.name ? 1 : -1).map(({ id, name, number }) => 
                <ElementContact key={id}>
                    <Name>{name}</Name>
                    <Number>{number}</Number>
                    <DeleteItem type="button" onClick={() => dispatch(removeContact(id))}>x</DeleteItem>
                </ElementContact>
    )
};

export default ContactsItem;