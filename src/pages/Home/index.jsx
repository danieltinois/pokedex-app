import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../../components/NavBar";
import PokeCard from "../../components/PokeCard";
import Loading from "../../components/Loading";
import ButtonScrollTop from "../../components/ButtonScrollTop";

import iconLoading from "../../assets/icon_loading.gif";

const HomePage = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [visiblePokemons, setVisiblePokemons] = useState(20);
  const [loading, setLoading] = useState(false);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  const getAllPokemons = async () => {
    try {
      let nextUrl = "https://pokeapi.co/api/v2/pokemon";
      let allPokemonData = [];

      while (nextUrl) {
        const response = await axios.get(nextUrl);
        const pokemonData = await Promise.all(
          response.data.results.map(async (pokemon) => {
            const pokemonResponse = await axios.get(pokemon.url);
            return pokemonResponse.data;
          })
        );

        allPokemonData = [...allPokemonData, ...pokemonData];
        nextUrl = response.data.next;
      }

      setAllPokemons(allPokemonData);
      setPokemons(allPokemonData.slice(0, visiblePokemons));
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  const loadMorePokemons = () => {
    setLoading(true);
    setTimeout(() => {
      setVisiblePokemons((prevVisiblePokemons) => prevVisiblePokemons + 30);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (!searchTerm.trim()) {
      setPokemons(allPokemons.slice(0, visiblePokemons));
    }
  }, [searchTerm, allPokemons, visiblePokemons]);

  const handleSearch = (event) => {
    const term = event.target.value.trim();
    setSearchTerm(term);
    if (term !== "") {
      searchPokemon(term);
    }
  };

  const searchPokemon = async (name) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
      );
      const pokemon = response.data;
      setPokemons([pokemon]);
    } catch (error) {
      // console.log("Pokemon not found:", error);
      const similarPokemons = allPokemons.filter((pokemon) =>
        pokemon.name.includes(name.toLowerCase())
      );
      setPokemons(similarPokemons.slice(0, visiblePokemons));
    }
  };

  useEffect(() => {
    getAllPokemons();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setShowScrollTopButton(true);
    } else {
      setShowScrollTopButton(false);
    }
  };

  return (
    <div className="w-full min-h-screen dark:bg-gray-700">
      <div>
        <NavBar pokemonFilter={handleSearch} />

        {pokemons.length === 0 ? (
          <div className="w-full flex justify-center items-center mt-5">
            <Loading />
          </div>
        ) : (
          <div className="flex justify-center items-center mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 max-w-7xl mx-10 my-5 w-full xl:max-w-[1920px] xl:mx-auto-[1920px]">
              {pokemons.map((pokemon, index) => (
                <PokeCard
                  key={index}
                  name={pokemon.name}
                  image={pokemon.sprites.front_default}
                  types={pokemon.types}
                />
              ))}
            </div>
          </div>
        )}
        <div className="h-24 flex justify-center">
          {allPokemons.length > visiblePokemons && (
            <div>
              <button
                onClick={loadMorePokemons}
                className="bg-blue-600 shadow hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex justify-center items-center">
                    <img
                      className="pr-3 w-10"
                      src={iconLoading}
                      alt="Loading..."
                    />
                    Carregando...
                  </div>
                ) : (
                  "View more"
                )}
              </button>
            </div>
          )}
        </div>

        {showScrollTopButton && (
          <div className="fixed bottom-4 right-4">
            <ButtonScrollTop />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
