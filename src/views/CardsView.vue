<template>
  <div>Pokemon Cards</div>
  <table>
    <thead>
      <th>Pokemon Count: {{ pokeData.count }}</th>
    </thead>
    <tbody>
      <tr>
        {{
          pokeData.results[0].name
        }}
      </tr>
    </tbody>
  </table>
</template>

<script>
import { PokemonApiService } from "../services/pokemon.api.service";

export default {
  name: "CardsView",
  data() {
    return {
      pokeData: [],
      apiPokemon: undefined,
    };
  },
  created() {
    this.getNumPokeData();
  },
  methods: {
    getNumPokeData() {
      this.apiPokemon = new PokemonApiService();
      this.apiPokemon
        .getAll()
        .then((response) => (this.pokeData = response.data));
    },
  },
};
</script>

<style></style>
