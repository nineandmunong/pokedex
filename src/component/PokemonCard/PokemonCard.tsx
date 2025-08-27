import { Link } from "react-router"
import { Type } from "../../interface/pokemonDetail"

interface PokemonCardProps {
  image: string
  name: string
  id: number
  types: Type[]
}

function PokemonCard({ image, name, id, types }: PokemonCardProps) {
  return (
    <div className="bg-white border border-gray-200 w-full p-[10px] max-w-[275px] rounded-lg m-auto  shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className="bg-[url('/img/poke-card-bg.png')] bg-center w-full aspect-square  bg-cover">
        <Link to={`/detail/${name}`}>
          <img
            className="rounded-t-lg h-[218px] p-[25px] w-full"
            src={image}
            alt=""
          />
        </Link>
      </div>
      <div className="pt-5 pb-[7px] px-[3px]">
        <div className="flex justify-between">
          <h5 className="capitalize mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            #{id}
          </h5>
        </div>

        <div className="flex gap-2 justify-end mt-[10px]">
          {types.map((item) => {
            return (
              <span
                className={`badge-type-${item.type.name} capitalize px-[10px] py-[5px] rounded-[10px]`}
                key={item.type.name}
              >
                {item.type.name}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PokemonCard
