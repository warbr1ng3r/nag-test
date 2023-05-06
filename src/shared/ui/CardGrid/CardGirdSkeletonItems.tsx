import { Skeleton } from '@mui/material';

import { CardGridItem } from './CardGridItem';

export const CardGirdSkeletonItems = () => (
  <>
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((number) => (
      <CardGridItem key={number}>
        <Skeleton height="200px" variant="rounded" />
      </CardGridItem>
    ))}
  </>
);
