import useSWR from 'swr';

import { fetcherPokemon } from '../fetcher';

export const usePokemon = (url: string) => {
  const controller = new AbortController();

  const { data, error, isLoading } = useSWR(url, (url) => fetcherPokemon(url, controller), {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    onErrorRetry: (error, _key, _config, revalidate, { retryCount }) => {
      if (error?.toString() === 'AbortError: The user aborted a request.') {
        setTimeout(() => revalidate(), 200);
      } else {
        setTimeout(() => revalidate({ retryCount }), 5000);
      }
    }
  });

  return {
    weight: data?.weight,
    height: data?.height,
    isLoading,
    isError: !!error,
    isCancelled: error?.toString() === 'AbortError: The user aborted a request.',
    controller
  };
};
