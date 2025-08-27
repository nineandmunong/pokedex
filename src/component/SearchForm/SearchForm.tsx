import { generationList, typesList, sortList } from "../../utils/optionList"
import { useSearchForm } from "./SearchForm.hook"

function SearchForm() {
  const { fieldKeyword, fieldGeneration, fieldSort, fieldType } =
    useSearchForm()

  return (
    <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
      <div>
        <label
          htmlFor="generation"
          className="block mb-2 text-md font-medium text-white"
        >
          Generation
        </label>
        <select
          {...fieldGeneration}
          id="generation"
          className="bg-[#212e37] border capitalize border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-[#375EAA] block w-full p-2.5"
        >
          {generationList.map((item, index) => {
            return (
              <option
                className="capitalize"
                key={`generation-key-${index}`}
                value={index}
              >
                {item.name}
              </option>
            )
          })}
        </select>
      </div>
      <div>
        <label
          htmlFor="type"
          className="block mb-2 text-md font-medium text-white"
        >
          Type
        </label>
        <select
          {...fieldType}
          id="type"
          className="bg-[#212e37] border capitalize border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-[#375EAA] block w-full p-2.5"
        >
          {typesList.map((item, index) => {
            return (
              <option
                className="capitalize"
                key={`type-key-${index}`}
                value={item}
              >
                {item}
              </option>
            )
          })}
        </select>
      </div>
      <div>
        <label
          htmlFor="sort"
          className="block mb-2 text-md font-medium text-white"
        >
          Sort By
        </label>
        <select
          {...fieldSort}
          id="sort"
          className="bg-[#212e37] border capitalize border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-[#375EAA] block w-full p-2.5"
        >
          {sortList.map((item, index) => {
            return (
              <option
                className="capitalize"
                key={`sort-key-${index}`}
                value={item}
              >
                {item}
              </option>
            )
          })}
        </select>
      </div>
      <div>
        <label
          htmlFor="generation"
          className="block mb-2 text-md font-medium text-white"
        >
          Search
        </label>
        <input
          {...fieldKeyword}
          id="keyword"
          className="bg-[#212e37] border capitalize border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-[#375EAA] block w-full p-2.5"
        />
      </div>
    </form>
  )
}

export default SearchForm
