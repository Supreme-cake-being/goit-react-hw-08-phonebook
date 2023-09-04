import { useEffect } from 'react';

import ContactEditor from 'components/ContactEditor/ContactEditor';
import ContactsList from 'components/ContactsList/ContactsList';
import { fetchContacts } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactEditor />
      <ContactsList />
    </>
  );
};

export default Contacts;
