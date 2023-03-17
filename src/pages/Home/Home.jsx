import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

import { useAuth } from 'hooks';

const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: #399b0b;
  &:hover,
  &:focus {
    color: #a1078d;
  }
`;

const Home = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box
      sx={{
        maxWidth: '800px',
        mx: 'auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
      }}
    >
      <Helmet>
        <title>
          My Phone-Book
        </title>
      </Helmet>
      <Typography component="h1" variant="h3">
        Welcome! This is your Phonebook
      </Typography>
      {!isLoggedIn && (
        <Typography component="p" variant="h6">
          You can <StyledLink to="/register">register</StyledLink> or{' '}
          <StyledLink to="/login">log in</StyledLink> if you already have an
          account. You will be able to add a list of contacts, which you can
          edit, delete or filter.
        </Typography>
      )}
      {isLoggedIn && (
        <Typography component="p" variant="h6">
          You are already logged in! Go to{' '}
          <StyledLink to="/contacts">contacts</StyledLink> to add new friends!
        </Typography>
      )}
    </Box>
  );
};

export default Home;
