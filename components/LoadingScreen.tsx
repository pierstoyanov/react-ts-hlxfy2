import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingScreen = (): JSX.Element => {
  return (
    <Stack
      sx={{ color: 'grey.500', bgcolor: 'blue' }}
      spacing={2}
      direction="row"
    >
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
    </Stack>
  );
};

export default LoadingScreen;
