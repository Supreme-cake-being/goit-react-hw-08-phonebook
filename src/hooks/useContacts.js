import { useSelector } from 'react-redux';
import { selectContacts, selectError } from 'redux/contacts/selectors';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  return {
    contacts,
    error,
  };
};
