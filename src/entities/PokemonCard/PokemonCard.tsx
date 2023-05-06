import { FC } from 'react';

import { Card, CardContent, Skeleton, Typography } from '@mui/material';

import { usePokemon } from '#shared/api';

import style from './PokemonCard.module.css';
import { Props } from './types';

export const PokemonCard: FC<Props> = ({ name, url }) => {
  const { isLoading, isError, weight, height } = usePokemon(url);
  return (
    <Card className={style.card}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        {isError ? (
          <>
            <Typography variant="body2">Ошибка API</Typography>
            <Typography color="text.secondary">:(</Typography>
          </>
        ) : isLoading ? (
          <Skeleton variant="rounded" width="150px" height="44px" />
        ) : (
          <>
            <Typography variant="body2">Рост: {height} ед.</Typography>
            <Typography color="text.secondary">Вес: {weight} ед.</Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
};
