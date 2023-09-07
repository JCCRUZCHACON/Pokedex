import { useEffect, useState } from "react";
import {
  getAllPokemons,
  getAllTypes,
  getPokemonsByType,
} from "../services/pokemons";
import { useSelector } from "react-redux";

//?Separacion de logica componente Pokedex.jsx
const usePokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonType, setPokemonType] = useState("");
  const [types, setTypes] = useState([]);

  const { name } = useSelector((store) => store.trainer);

  // const handleChangeInput = (e) => {
  //   setPokemonName(e.target.value)
  // }

  // const handleChangeSelect = (e) => {
  //   setPokemonType(e.target.value)
  // }

  const handleChange = (setState) => (e) => {
    setState(e.target.value);
  };

  const pokemonByName = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
  );

  console.log(pokemonByName);

  useEffect(() => {
    if (!pokemonType) {
      getAllPokemons()
        .then((data) => setPokemons(data))
        .catch((err) => console.log(err));
    }
  }, [pokemonType]);

  useEffect(() => {
    if (pokemonType) {
      //! hacer la peticion de los pokemons por tipo
      getPokemonsByType(pokemonType).then((data) => setPokemons(data));
    }
  }, [pokemonType]);

  useEffect(() => {
    getAllTypes()
      .then((types) => setTypes(types))
      .catch((err) => console.log(err));
  }, []);

  return {
    name,
    pokemonName,
    setPokemonName,
    pokemonType,
    setPokemonType,
    handleChange,
    pokemonByName,
    types,
  };
};
export default usePokedex;
