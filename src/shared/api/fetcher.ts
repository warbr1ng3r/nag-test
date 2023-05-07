import { PokemonListResponse, PokemonResponse } from '#shared/api/types';

export const fetcherPokemonList: (
  entrypoint: string,
  controller: AbortController
) => Promise<PokemonListResponse> = (entrypoint, controller: AbortController) =>
  fetch(`https://pokeapi.co/api/v2/${entrypoint}`, { signal: controller?.signal }).then(
    (response) => response.json()
  );

export const fetcherPokemon: (
  url: string,
  controller: AbortController
) => Promise<PokemonResponse> = (url: string, controller: AbortController) =>
  fetch(url, { signal: controller?.signal }).then((response) => response.json());
