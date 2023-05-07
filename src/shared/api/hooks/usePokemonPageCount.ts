import useSWR from 'swr';

import { fetcherPokemonList } from '#shared/api/fetcher';

export const usePokemonPageCount = (countOnPage: number): number | null => {
  const { data } = useSWR(`pokemon?limit=${countOnPage}&offset=0`, fetcherPokemonList, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  return data ? Math.ceil(data?.count / countOnPage) : null;
};
