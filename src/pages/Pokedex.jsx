import { useState } from "react";
import PokemonList from "../components/pokedex/PokemonList";
import usePokedex from "../hooks/usePokedex";
import { paginateData } from "../utils/pagination";
import Pagination from "../components/pokedex/Pagination";

const Pokedex = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    handleChange,
    name,
    pokemonName,
    pokemonType,
    pokemonByName,
    setPokemonName,
    setPokemonType,
    types,
  } = usePokedex();

  const { itemsCurrentPage, lastPage, pagesInCurrentBlock } = paginateData(
    pokemonByName,
    currentPage
  );

  return (
    <main>
      <section>
        <p>
          <span>WELCOME {name}</span>
        </p>
        <form>
          <div>
            <input
              value={pokemonName}
              onChange={handleChange(setPokemonName)}
              placeholder="Search pokemon..."
              type="text"
            />
          </div>
          <select value={pokemonType} onChange={handleChange(setPokemonType)}>
            <option value="">All pokemons</option>
            {types.map((type) => (
              <option key={type.name} value={type.name} className="capitalize">
                {type.name}
              </option>
            ))}
          </select>
        </form>
      </section>

      <Pagination
        lastPage={lastPage}
        pagesInCurrentBlock={pagesInCurrentBlock}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />

      <PokemonList pokemons={itemsCurrentPage} />
    </main>
  );
};
export default Pokedex;
