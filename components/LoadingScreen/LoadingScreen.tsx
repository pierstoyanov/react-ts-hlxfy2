import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingScreen = () => {
  return (
    <Stack sx={{ color: 'grey.500' }}
     spacing={3} direction="row" justifyContent="center">
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
    </Stack>
  );
};

export default LoadingScreen;
