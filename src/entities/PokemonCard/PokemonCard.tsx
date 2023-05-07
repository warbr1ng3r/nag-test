import { FC, useEffect } from 'react';

import { Card, CardContent, Skeleton, Typography } from '@mui/material';

import { usePokemon } from '#shared/api';

import style from './PokemonCard.module.css';
import { Props } from './types';

export const PokemonCard: FC<Props> = ({ name, url }) => {
  const { isLoading, isError, isCancelled, weight, height, controller } = usePokemon(url);

  useEffect(() => {
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <Card className={style.card}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        {isLoading || isCancelled ? (
          <Skeleton variant="rounded" width="100%" height="44px" />
        ) : isError ? (
          <>
            <Typography variant="body2">Ошибка API</Typography>
            <Typography color="text.secondary">:(</Typography>
          </>
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
