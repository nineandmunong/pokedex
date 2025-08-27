import { create } from "zustand"
import { IPokemonDetailResponse } from "../interface/pokemonDetail"
import { AxiosError, AxiosResponse } from "axios"
const initStore = {
  pokemon: {
    data: [],
    loading: false,
    error: null,
  },
  fetchPokemon: {
    data: [],
    loading: false,
    error: null,
  },
}

type pokemonType = {
  data: IPokemonDetailResponse[]
  loading: boolean
  error:
    | null
    | string
    | AxiosError<AxiosResponse<any, any>, any>
    | AxiosResponse<AxiosResponse<any, any>, any>
    | undefined
}

type UsePokemonListStoreType = {
  pokemon: pokemonType
  fetchPokemon: pokemonType
  setPokemonList: (value: pokemonType) => void
  setFetchPokemonList: (value: pokemonType) => void
  clearPokemon: () => void
}

export const usePokemonListStore = create<UsePokemonListStoreType>((set) => ({
  ...initStore,
  setPokemonList: (value: pokemonType) => set({ pokemon: value }),
  setFetchPokemonList: (value: pokemonType) => set({ fetchPokemon: value }),
  clearPokemon: () => set({ ...initStore }),
}))
