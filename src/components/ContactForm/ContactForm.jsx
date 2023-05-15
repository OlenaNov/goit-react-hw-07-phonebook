import { useState } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Label, SubmitContact } from "./ContactForm.styled";
import { addContact } from "redux/contactsSlice";

function ContactForm() {

        const [name, setName] = useState('');
        const [number, setNumber] = useState('');
        const dispatch = useDispatch();
        const contacts = useSelector(state => state.contacts);
        
        const changeInput = e => {
                const nameInput = e.currentTarget.name;
                const value = e.currentTarget.value;

                switch(nameInput) {
                        case 'name':
                        setName(value);
                        break;

                        case 'number':
                        setNumber(value);
                        break;

                        default: 
                        return;
                };
        }; 

        
    
        const controllingUniqueness = (name) => {
          return contacts.some(contact => contact.name === name)
        };

        const handleSubmit = e => {
                e.preventDefault();

                if(controllingUniqueness(name)) {
                        Notify.warning(`${name} is already in contacts`);
                        return;
                };
                dispatch(addContact(name, number));
                setName('');
                setNumber('');
        };

                return (
                        <Form onSubmit={handleSubmit}>
                        <Label> Name
                        <Input type="text"
                                name="name"
                                value={name}
                                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                                required 
                                onChange={changeInput}
                                />
                        </Label>
                        <Label> Number
                        <Input
                                type="tel"
                                name="number"
                                value={number}
                                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                                required
                                onChange={changeInput}
                                />
                        </Label>
                        <SubmitContact type="submit">Add contact</SubmitContact>
                        </Form>
                )
    };

    export default ContactForm;