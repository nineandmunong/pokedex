import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import { IPokemonDetailResponse } from "../../interface/pokemonDetail"
import { pokemonDetailServices } from "../../service/pokemonDetail"

type pokemonType = {
  data: IPokemonDetailResponse | undefined
  loading: boolean
  error: null | any
}

function DetailPage() {
  const { name } = useParams()

  const [pokemon, setPokemon] = useState<pokemonType>({
    data: undefined,
    loading: true,
    error: null,
  })

  const callData = async (name: string) => {
    const response = await pokemonDetailServices.getPokemonDetail(name)

    if (response.status === 200) {
      if (response.data)
        setPokemon({
          data: {
            ...response.data,
            image:
              response.data.sprites.other.dream_world.front_default ||
              response.data.sprites.other["official-artwork"].front_default,
          },
          loading: false,
          error: null,
        })
    } else {
      setPokemon({
        data: undefined,
        loading: false,
        error: response.error,
      })
    }
  }

  useEffect(() => {
    if (name) callData(name)
  }, [name])

  return (
    <div className="w-[90%] m-[auto] max-w-[1080px]">
      <div className="flex justify-center">
        <img src="/img/logo.webp" className="max-h-[80px] mt-[22px]" alt="" />
      </div>

      <div className="w-[90%] max-w-[600px] m-auto">
        <Link
          to={"/"}
          className="inline-flex items-center border bg-indigo-50 border-indigo-300 px-3 py-1.5 rounded-md text-indigo-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            ></path>
          </svg>
          <span className="ml-1 font-bold text-lg">Back</span>
        </Link>
        {pokemon.data && (
          <div className="p-[10px] rounded-[-20px] m-auto shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="bg-center relative w-full h-[400px] aspect-square bg-cover">
              <img
                className="absolute h-[auto] max-h-[390px] aspect-square translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]"
                src="/public/img/pokemon_bg.png"
                alt=""
              />
              <img
                className="absolute rounded-t-lg h-[50%] p-[25px] translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] "
                src={pokemon.data.image}
                alt=""
              />
            </div>
            <div className="pt-5 bg-white rounded-[10px] p-[20px] mt-[20px]">
              <div className="flex justify-between">
                <h5 className="capitalize mb-2 text-2xl text-black font-bold tracking-tight  dark:text-white">
                  {pokemon.data.name}
                </h5>
                <h5 className="mb-2 text-2xl text-black font-bold tracking-tight dark:text-white">
                  #{pokemon.data.id}
                </h5>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[20px] gap-y-[25px]">
                <div>
                  <div className="flex gap-x-[10px]">
                    <div className="font-bold">Height : </div>
                    <div>{(pokemon.data.height / 10).toFixed(2)} m.</div>
                  </div>
                  <div className="flex gap-x-[10px]">
                    <div className="font-bold">Weight : </div>
                    <div>{(pokemon.data.weight / 10).toFixed(2)} kg.</div>
                  </div>
                </div>

                <div className="flex gap-2 justify-start sm:justify-end mt-[10px]">
                  {pokemon.data.types.map((item) => {
                    return (
                      <span
                        className={`badge-type-${item.type.name} capitalize px-[10px] py-[5px] rounded-[10px]`}
                      >
                        {item.type.name}
                      </span>
                    )
                  })}
                </div>

                <div>
                  <h5 className="font-bold text-[20px] mb-[8px] ">Abilities</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] mt-[16pxs]">
                    {pokemon.data.abilities.map((item) => {
                      return (
                        <div
                          className={`capitalize px-[10px] py-[5px] bg-blue-300 rounded-[10px]`}
                        >
                          {item.ability.name}
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div>
                  <h5 className="font-bold text-[20px] mb-[8px] ">State</h5>
                  <div className="grid grid-cols-1 gap-[16px] mt-[16pxs]">
                    {pokemon.data.stats.map((item) => {
                      return (
                        <div className="flex gap-x-[10px] justify-between">
                          <div className="font-bold capitalize">
                            {item.stat.name} :
                          </div>
                          <div>{item.base_stat}</div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}{" "}
      </div>
    </div>
  )
}

export default DetailPage
