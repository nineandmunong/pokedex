import { MoonLoader } from "react-spinners"
import PokemonCard from "../../component/PokemonCard/PokemonCard"
import SearchForm from "../../component/SearchForm/SearchForm"
import { usePokemonListStore } from "../../store/pokemonList"

const HomePage = () => {
  const { pokemon, fetchPokemon } = usePokemonListStore()

  return (
    <div>
      <div className="w-[90%] m-[auto] max-w-[1080px]">
        <div className="flex justify-center">
          <img src="/img/logo.webp" className="max-h-[80px] mt-[22px]" alt="" />
        </div>
        <SearchForm />

        {fetchPokemon.loading && (
          <div className="flex justify-center items-center h-[700px]">
            <MoonLoader size={60} speedMultiplier={1} color="#fff" />
          </div>
        )}

        {!fetchPokemon.loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] mt-[40px]">
            {pokemon.data?.map((item) => {
              return (
                <PokemonCard
                  key={item.id}
                  image={item.image || ""}
                  name={item.name}
                  id={item.id}
                  types={item.types}
                />
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage
