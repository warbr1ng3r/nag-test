import useSWR from 'swr';

import { fetcherPokemon } from '../fetcher';

export const usePokemon = (url: string) => {
  const { data, error, isLoading } = useSWR(url, fetcherPokemon);

  return {
    weight: data?.weight,
    height: data?.height,
    isLoading,
    isError: !!error
  };
};
