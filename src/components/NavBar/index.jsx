import logoPokebola from "../../assets/logo-pokebola.webp";

const NavBar = ({ pokemonFilter }) => {
  return (
    <nav className="bg-blue-800 shadow- border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between mx-5 p-7">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logoPokebola} className="h-14 pr-1" alt="PokeDex Logo" />
          <span className="self-center text-3xl font-semibold font-mono whitespace-nowrap text-white">
            PokeDex
          </span>
        </a>
        <div className="flex md:order-2">
          <form className="max-w-md mx-auto w-[900px]">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="search-navbar"
                className="block w-full p-4 ps-10 text-base shadow-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Pokemons..."
                onChange={pokemonFilter}
                required
              />
              <button
                type="submit"
                className=" font-semibold text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
