import { useState, useEffect } from "react";

// Interface som beskriver vårt Pokémon-objekt
interface Pokemon {
  name: string;
  image: string;
}

const PokeApp = () => {
  const [firstPokemon, setFirstPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    const fetchFirstPokemon = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/6");
      const data = await response.json();

      const pokemon: Pokemon = {
        name: data.name,
        image: data.sprites.front_default,
      };

      setFirstPokemon(pokemon);
    };

    fetchFirstPokemon();
  }, []);

  return (
    <div>
      <h1>PokeApp</h1>
      {firstPokemon ? (
        <div>
          <h2>{firstPokemon.name}</h2>
          <img src={firstPokemon.image} alt={firstPokemon.name} />
        </div>
      ) : (
        <p>Laddar Pokémon...</p>
      )}
    </div>
  );
};

export default PokeApp;
