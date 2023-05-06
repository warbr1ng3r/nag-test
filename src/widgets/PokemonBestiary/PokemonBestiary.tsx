import { ChangeEvent, useState } from 'react';

import { Alert, Pagination, Skeleton, Snackbar } from '@mui/material';

import { PokemonCard } from '#entities/PokemonCard';
import { COUNT_POKEMONS_ON_PAGE, usePokemonList } from '#shared/api';
import { capitalizeFirstLetter } from '#shared/helpers';
import { CardGirdSkeletonItems, CardGrid, CardGridItem } from '#shared/ui/CardGrid';

export const PokemonBestiary = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangePage = (event: ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const { results, isLoading, isError, pageCount } = usePokemonList(
    COUNT_POKEMONS_ON_PAGE,
    (currentPage - 1) * COUNT_POKEMONS_ON_PAGE
  );

  return (
    <>
      {
        <CardGrid>
          {isLoading || isError ? (
            <CardGirdSkeletonItems />
          ) : (
            results?.map((item) => (
              <CardGridItem key={item?.name}>
                <PokemonCard name={capitalizeFirstLetter(item.name)} url={item.url} />
              </CardGridItem>
            ))
          )}
        </CardGrid>
      }
      {!pageCount ? (
        <Skeleton variant="rounded" width={346} height={32} />
      ) : (
        <Pagination
          color="secondary"
          count={pageCount}
          page={currentPage}
          onChange={handleChangePage}
        />
      )}
      <Snackbar open={isError}>
        <Alert severity="error" sx={{ width: '100%' }}>
          API Error :(
        </Alert>
      </Snackbar>
    </>
  );
};
