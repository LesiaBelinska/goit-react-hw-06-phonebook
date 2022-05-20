import { useSelector, useDispatch } from 'react-redux';

import ContactListItem from 'components/ContactListItem/ContactListItem';
import { remove } from "../../redux/contacts-actions.js";

const ContactList = () => {

    const contacts = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();
    const filtredContacts = contacts.filter(contact =>
        contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
    

    return (
        <ul>
            {filtredContacts.map(({ id, name, number }) => {
                return (
                    <ContactListItem
                        key={id}
                        id={id}
                        name={name}
                        number={number}
                        onDeleteContact={(contactId)=>dispatch(remove(contactId))}
                    />
                )
            })}
        </ul>
    )
};

export default ContactList;

