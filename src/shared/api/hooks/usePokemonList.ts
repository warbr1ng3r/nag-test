import useSWR from 'swr';

import { fetcherPokemonList } from '../fetcher';

export const usePokemonList = (limit: number, offset: number) => {
  const { data, error, isLoading } = useSWR(
    `pokemon?limit=${limit}&offset=${offset}`,
    fetcherPokemonList
  );

  return {
    pageCount: data && Math.ceil(data?.count / limit),
    results: data?.results,
    isLoading,
    isError: !!error
  };
};
