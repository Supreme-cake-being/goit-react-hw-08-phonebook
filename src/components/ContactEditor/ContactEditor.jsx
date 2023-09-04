import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Form, Label, Input, Button } from './ContactEditor.styled';
import { addContact } from 'redux/contacts/operations';
import { useContacts } from 'hooks/useContacts';

const ContactEditor = () => {
  const nameId = nanoid();
  const numberId = nanoid();

  const [isLoading, setIsLoading] = useState(false);
  const { contacts } = useContacts();
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(false);
  }, [contacts]);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;

    setIsLoading(true);
    const isInContacts = contacts.find(
      ({ name }) => name.toLowerCase() === form.name.value.toLowerCase()
    );

    if (isInContacts) return alert(`${form.name.value} is already in contacts`);

    dispatch(
      addContact({
        id: nanoid(),
        name: form.name.value,
        number: form.number.value,
      })
    );

    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameId}>Name</Label>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        id={nameId}
      />

      <Label htmlFor={numberId}>Number</Label>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        id={numberId}
      />

      <Button type="submit">{isLoading ? `Adding...` : `Add contact`}</Button>
    </Form>
  );
};

export default ContactEditor;
