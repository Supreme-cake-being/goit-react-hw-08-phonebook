import { useContacts } from 'hooks/useContacts';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';
import { List, EmptyContacts } from './ContactsList.styled';
import { Contact } from 'components/Contact/Contact';
import Filter from 'components/Filter/Filter';

const ContactsList = () => {
  const { contacts, error } = useContacts();
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  const shouldShowContacts = contacts.length !== 0;
  const shouldShowFilteredContatcs = filteredContacts.length !== 0;
  const shouldShowEmptyContactsMessage =
    shouldShowContacts || shouldShowFilteredContatcs;

  return (
    <>
      {error && <p>{error}</p>}
      {shouldShowContacts && (
        <List>
          <h1>Your Contacts</h1>
          <Filter />
          {shouldShowFilteredContatcs &&
            filteredContacts.map(({ id, name, number }) => (
              <Contact key={id} id={id} name={name} number={number} />
            ))}
        </List>
      )}
      {!shouldShowEmptyContactsMessage && (
        <EmptyContacts>There are no contacts :(</EmptyContacts>
      )}
    </>
  );
};

export default ContactsList;
