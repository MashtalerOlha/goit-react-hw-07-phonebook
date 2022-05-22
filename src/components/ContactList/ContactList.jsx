import { useDispatch, useSelector } from 'react-redux';
import { ContactCard, Contact, Button } from './ContactList.Styled';
import {
  getFilter,
  getContacts,
  deleteContact,
} from 'components/redux/contactsSlice';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const handeDeleteContact = newContactId => {
    return dispatch(deleteContact(newContactId));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ContactCard>
      {visibleContacts.map(({ id, name, number }) => (
        <Contact key={id}>
          {name}: {number}
          <Button type="button" onClick={() => handeDeleteContact(id)}>
            Delete
          </Button>
        </Contact>
      ))}
    </ContactCard>
  );
};
