import { FC, PropsWithChildren } from 'react';

import { Grid } from '@mui/material';

export const CardGrid: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Grid
      container
      sx={{ py: 3 }}
      spacing={{ xs: 3, md: 3, lg: 2 }}
      columns={{ xs: 2, sm: 3, md: 4, lg: 6 }}
    >
      {children}
    </Grid>
  );
};
