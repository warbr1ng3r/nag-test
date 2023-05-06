import { FC, PropsWithChildren } from 'react';

import { Grid } from '@mui/material';

export const CardGridItem: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Grid item xs={1} sm={1} md={1} lg={1}>
      {children}
    </Grid>
  );
};
