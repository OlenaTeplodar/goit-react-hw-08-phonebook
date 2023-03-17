import { Helmet } from 'react-helmet-async';
import { Typography } from '@mui/material';
import { FadeLoader } from 'react-spinners';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  const emptyPhonebook = contacts.length === 0 && !isLoading && !error;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <title>My contacts</title>
      </Helmet>
      <Filter />
      {isLoading && (
        <FadeLoader
          color="#399b0b"
          cssOverride={{
            display: 'block',
            margin: '0 auto',
          }}
        />
      )}
      {contacts.length > 0 && <ContactList />}
      {emptyPhonebook && (
        <Typography
          sx={{ m: '4px auto 0 auto', width: { xs: '90%', sm: '500px' } }}
          variant="h6"
          component="div"
        >
          Your phonebook is empty. Please add contact.
        </Typography>
      )}

      {error && (
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Something went wrong...Try reloading the page
        </Typography>
      )}
    </div>
  );
};

export default Contacts;
