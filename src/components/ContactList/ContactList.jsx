import { ContactCard, Contact, Button } from './ContactList.Styled';
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from 'components/redux/contactApi';
import { useSelector } from 'react-redux';

export const ContactList = () => {

  const { data: contacts } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const deleteOneContact = contactId => deleteContact(contactId);


  const filter = useSelector(state => state.filter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    if (contacts) {
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      );
    }
  };
  const visibleContacts = getVisibleContacts();

  return (
    <ContactCard>
      { contacts && visibleContacts.map(({ id, name, phone }) => {
          return (
            <Contact key={id}>
              <p>
              <span>{name}</span>
              <span>{phone}</span>
            </p>
            <Button type="button" onClick={() => deleteOneContact(id)}> delete
            </Button>
            </Contact>
          );
        })}
    </ContactCard>
  );
};
