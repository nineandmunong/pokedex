import axios from "axios"
import { IPokemonDetailResponse } from "../interface/pokemonDetail"
import { handleResponse, IResponse } from "../utils/handleResponse"

interface IGetPokemonDetailResponse extends IResponse {
  status: number | undefined
  data?: IPokemonDetailResponse
}

export const pokemonDetailServices = {
  getPokemonDetail: async (
    name: string
  ): Promise<IGetPokemonDetailResponse> => {
    /* const response = 
    return response */
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      )

      return handleResponse.success(response)
    } catch (error: any) {
      return handleResponse.error(error)
    }
  },
}
