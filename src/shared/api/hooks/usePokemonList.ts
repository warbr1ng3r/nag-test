import { useEffect } from 'react';

import useSWR, { preload } from 'swr';

import { fetcherPokemonList } from '../fetcher';

export const usePokemonList = (limit: number, offset: number) => {
  const controller = new AbortController();
  const { data, error, isLoading } = useSWR(
    `pokemon?limit=${limit}&offset=${offset}`,
    (url) => fetcherPokemonList(url, controller),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      onErrorRetry: (error, _key, _config, revalidate, { retryCount }) => {
        if (error?.toString() === 'AbortError: The user aborted a request.') {
          setTimeout(() => revalidate(), 200);
        } else {
          setTimeout(() => revalidate({ retryCount }), 5000);
        }
      }
    }
  );

  const { data: immutableData } = useSWR('pokemon?limit=12&offset=0', fetcherPokemonList, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  useEffect(() => {
    preload(`pokemon?limit=${limit}&offset=${offset + limit}`, (url) =>
      fetcherPokemonList(url, controller)
    );
  }, [offset]);

  return {
    pageCount: immutableData && Math.ceil(immutableData?.count / limit),
    results: data?.results,
    isLoading,
    isError: !!error,
    isCancelled: error?.toString() === 'AbortError: The user aborted a request.',
    controller
  };
};
