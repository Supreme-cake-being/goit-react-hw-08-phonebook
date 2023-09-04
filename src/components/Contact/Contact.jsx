import { useState } from 'react';
import { Item, Button } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = id => {
    dispatch(deleteContact(id));
    setIsLoading(true);
  };

  return (
    <Item>
      <p>{name}</p>
      <p>{number}</p>
      <Button type="button" onClick={() => handleClick(id)}>
        {isLoading ? `Deleting...` : `Delete`}
      </Button>
    </Item>
  );
};
