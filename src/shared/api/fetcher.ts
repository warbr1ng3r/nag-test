import { TFetcherPokemon, TFetcherPokemonList } from '#shared/api/types';

export const fetcherPokemonList: TFetcherPokemonList = (entrypoint, controller: AbortController) =>
  fetch(`https://pokeapi.co/api/v2/${entrypoint}`, { signal: controller?.signal }).then(
    (response) => response.json()
  );

export const fetcherPokemon: TFetcherPokemon = (url: string, controller: AbortController) =>
  fetch(url, { signal: controller?.signal }).then((response) => response.json());
