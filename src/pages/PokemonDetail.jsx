import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../services/pokemons";
import StatBarList from "../components/pokemonDetail/StatBarList";

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState(null);

  const { pokemonId } = useParams();

  useEffect(() => {
    getPokemonById(pokemonId)
      .then((data) => setPokemonData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="flex justify-center items-center ">
      <article className="w-[min(100,_400px)]">
        <header>
          <div className="flex justify-center items-center">
            <img className="w-[200px]  " src={pokemonData?.image} alt="" />
          </div>
        </header>
        <section>
          <span className="font-bold text-4xl text-white bg-black/50 rounded-3xl">
            #{pokemonData?.id}
          </span>
          <h1 className="flex justify-center font-bold text-4xl m-4">{pokemonData?.name}</h1>
          <div className="flex justify-center items-center ">
            <article className="text-white mb-6 p-2 bg-black/50 text-center w-[120px] m-2 rounded-full">
              PESO : {pokemonData?.weight}
            </article>
            <article className="bg-black/50 mb-6 p-2 text-white text-center w-[120px] m-2 rounded-full">
              PESO : {pokemonData?.height}
            </article>
          </div>

          <StatBarList
            stats={pokemonData?.stats}
            
          />
        </section>
      </article>
    </main>
  );
};
export default PokemonDetail;
