import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Header } from 'components/Header';
import { Suspense } from 'react';
import { Container  } from '@mui/material';
import { FadeLoader } from 'react-spinners';
// import { Typography, Link } from '@mui/material';

export const Layout = () => {
  return (
    <div
      className="mainContainer"
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Header />
      <Suspense
        fallback={
          <FadeLoader
            color="#097a1c"
            cssOverride={{
              display: 'block',
              margin: '0 auto',
            }}
          />
        }
      >
        <main>
          <Container
            style={{ maxWidth: 1240, margin: '0 auto', padding: '0 16px' }}
          >
            <Outlet />
          </Container>
        </main>
        {/* <footer
          style={{
            height: '48px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '24px 0',
            marginTop: 'auto',
          }}
        >
          <Container
            style={{ maxWidth: 1240, margin: '0 auto', padding: '0 16px' }}
          >
            <Typography variant="body2" color="text.secondary" align="center">
              {'Copyright © '}
              <Link color="inherit" href="https://github.com/olenateplodar">
                Created by Olena Holubonkova
              </Link>{' '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          </Container>
        </footer> */}
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
