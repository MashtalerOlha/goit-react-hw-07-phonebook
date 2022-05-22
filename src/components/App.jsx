import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container } from './Container.Styled';
import { Toaster } from 'react-hot-toast';

export function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      {}
      <ContactList />
      <Toaster />
    </Container>
  );
}
