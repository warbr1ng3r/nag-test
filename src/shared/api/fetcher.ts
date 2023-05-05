import { Fetcher } from 'swr';

import { PokemonListResponse, PokemonResponse } from '#shared/api/types';

export const fetcherPokemonList: Fetcher<PokemonListResponse, string> = (entrypoint) =>
  fetch(`https://pokeapi.co/api/v2/${entrypoint}`).then((response) => response.json());

export const fetcherPokemon: Fetcher<PokemonResponse, string> = (url) =>
  fetch(url).then((response) => response.json());
