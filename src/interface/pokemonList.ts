export interface IGetPokemonListResponse {
  status: number
  data: IPokemonListResponse
}

export interface IPokemonListResponse {
  count: number
  next: string
  previous: string
  results: IPokemonListItem[]
}

export interface IPokemonListItem {
  name: string
  url: string
}
