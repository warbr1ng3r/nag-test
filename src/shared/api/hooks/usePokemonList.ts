import useSWR, { preload } from 'swr';

import { fetcherPokemonList } from '../fetcher';

export const usePokemonList = (limit: number, offset: number) => {
  const { data, error, isLoading } = useSWR(
    `pokemon?limit=${limit}&offset=${offset}`,
    fetcherPokemonList
  );

  const { data: immutableData } = useSWR('pokemon?limit=12&offset=0', fetcherPokemonList, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  preload(`pokemon?limit=${limit}&offset=${offset + limit}`, fetcherPokemonList);

  return {
    pageCount: immutableData && Math.ceil(immutableData?.count / limit),
    results: data?.results,
    isLoading,
    isError: !!error
  };
};
