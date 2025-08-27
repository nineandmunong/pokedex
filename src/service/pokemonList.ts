import axios from "axios"
import { IPokemonListResponse } from "../interface/pokemonList"
import { handleResponse, IResponse } from "../utils/handleResponse"

interface IGetPokemonListResponse extends IResponse {
  status: number | undefined
  data?: IPokemonListResponse
}

export const pokemonListServices = {
  getPokemonList: async (
    limit?: number,
    offset?: number
  ): Promise<IGetPokemonListResponse> => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit || 151}&offset=${
          offset || 0
        }`
      )
      return handleResponse.success(response)
    } catch (error:any) {
      return handleResponse.error(error)
    }
  },
}
